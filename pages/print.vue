<template>
    <v-row>
        <!-- <CardIsiField :jenis_pendaftaran="'umum'" /> -->
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            >
            <v-card-title>
                Cetak pendaftaran
            </v-card-title>
            <v-card-subtitle>silahkan isi field berikut</v-card-subtitle>
                <!-- <v-card-text>nama</v-card-text> -->
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-alert type="error" dismissible v-model="tampilkan_warning" transition="slide-bottom">
                info {{ error }} 
            </v-alert>
        </v-col>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            mt="5"
            >
                <v-container>
                    <v-select
                    label="PILIH IDENTITAS"
                    :items="[{text : 'NO KTP' , value : 'no_ktp'}, {text : 'NO RM' , value : 'no_rekam_medik'}]"
                    variant="underlined"
                    v-model="form.type_verify"
                    ></v-select>
                    <v-text-field v-model="form.number" v-if="form.type_verify == 'no_rekam_medik'"
                        label="NO RM"
                    ></v-text-field>
                    <v-text-field v-model="form.number" v-if="form.type_verify == 'no_ktp'"
                        label="NO KTP"
                    ></v-text-field>
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="form.date_birth"
                                label="TANGGAL LAHIR"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="form.date_birth"
                            scrollable
                            color="#385F73"
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>

                    <v-row class="justify-end my-3 mx-3">
                        <!-- <v-col cols="12"> -->
                            
                            <v-btn @click="verif_pasien()" color="green" class="mx-2" small :loading="isLoading" :disabled="isLoading">
                            <v-icon
                                dark
                                left
                            >
                                mdi mdi-location-enter
                            </v-icon>
                                Verifikasi 
                            <template v-slot:loader>
                                <span>Loading...</span>
                            </template>
                            </v-btn>
                            
                            <NuxtLink to="/">
                                <v-btn color="red" small :loading="isLoadingKembali">
                                    <v-icon
                                    dark
                                    left
                                    >
                                    mdi mdi-minus-circle-outline
                                    </v-icon>
                                    Kembali
                                </v-btn>
                            </NuxtLink>
                        <!-- </v-col> -->
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
    
</template>

<script>
export default{
    data(){
        return {
            form : {
                type_verify : 'no_rekam_medik',
                number : '',
                date_birth: ''
            },

            data_pasien:'',
            tampilkan_warning : false,
            jenisidentitas:'NO RM',
            date: '',
            menu: false,
            modal: false,
            menu2: false,
            isLoading : false,
            isLoadingKembali : false,
            error: ''
        }
    },
    methods: {
          //cek pasien apakah ada dalam database , harusnya gunakan fetch
        async verif_pasien(){

            this.isLoading = true;
            await this.$axios.$post('/api/cancel/verify-patient', 
                {
                    type_verify : 'no_rekam_medik', //ktprekammedik sebelah kiri merupakan nama yang ada di backend
                    number:   '10537536', //title sebelah kiri merupakan nama yang ada di backend
                    date_birth: '1901-01-01', //content sebelah kiri merupakan nama yang ada di backend
                }
                // this.form
            ).then(Response => { 
                // console.log(Response)
                if(Response.result.data_pasien){
                    this.data_pasien = Response.result.data_pasien;
                    this.$store.commit('pasien/set', Response.result.data_pasien)
                    this.$store.commit('pendaftaran/set_pasien_id', Response.result.data_pasien.pasien_id)
                    this.$store.commit('global/set_poli',Response.result.data_poli_rj.ruangan_nama + ' - ' + Response.result.data_poli_rj.instalasi_nama)
                    this.$store.commit('global/set_subDivisi', Response.result.data_sub_poli.jeniskasuspenyakit_nama)
                    this.$store.commit('global/set_tanggal', {data_tgl : Response.result.data_pendaftaran.tgljadwal, hari : Response.result.data_pendaftaran.harijadwal, tgl : this.$moment(Response.result.data_pendaftaran.tgljadwal).format('DD MMMM YYYY')})
                    this.$store.commit('global/set_no_antrian', Response.result.data_pendaftaran.no_urutantri_subpoli)
                    this.$store.commit('global/set_jenis_form', 'C')
                    // this.$apirsds.setHeader('x-authorization-token', Response.result.token);
                    this.$router.push({name : 'informasi-cetak', params: {pasien : Response.result}})
                } else{
                    this.error = 'tidak ada data pendaftaran'
                    this.tampilkan_warning = true;
                }
                // localStorage.setItem("authToken", Response.result.token)
                this.isLoading = false;
            }).catch(error => {
                console.log(error);
                this.error = error
                this.tampilkan_warning = true;
                this.isLoading = false;
            })

        }
    }
}
</script>