<template>
    <v-row>
        <CardIsiField :jenis_pendaftaran="'jkn'" />
        <v-col cols="12">
            <v-alert type="error" dismissible v-model="tampilkan_warning" transition="slide-bottom">
            anda belum terdaftar, Silahkan datang ke Soetomo
            </v-alert>
        </v-col>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            mt="5"
            >
                <v-container>
                    <v-text-field v-model="form.no_bpjs"
                        label="BPJS"
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
                    <v-select
                    label="PILIH FASKES"
                    :items="[{text : 'Faskes 1' , value : '1'}, {text : 'Faskes 2' , value : '2'}]"
                    variant="underlined"
                    v-model="form.faskes"
                    ></v-select>

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
                no_bpjs : '',
                date_birth: '',
                faskes : '',
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
        }
    },
    methods: {
        //cek pasien apakah ada dalam database , harusnya gunakan fetch
        async verif_pasien(){

            this.isLoading = true;
            await this.$apirsds.$post('/api/jkn/verify-patient', 
                {
                    no_bpjs : '0001648458887', //ktprekammedik sebelah kiri merupakan nama yang ada di backend
                    date_birth : '1985-06-02', //content sebelah kiri merupakan nama yang ada di backend
                    faskes :  2, //title sebelah kiri merupakan nama yang ada di backend
                }
                // this.form
            ).then(Response => { 
                this.data_pasien = Response.result.data_pasien;
                this.$router.push({name : 'pasien_jkn-info-pasienInfo', params: { pasien : this.data_pasien, status : Response.result.status_pendaftaran, bpjs : Response.result.result_bpjs.response}})
                localStorage.setItem("authToken", Response.result.token)
                this.$store.commit('pasien/set', Response.result.data_pasien)
                this.$store.commit('pasien/set_data_bpjs', Response.result.result_bpjs)
                this.$store.commit('pendaftaran/set_pasien_id', Response.result.data_pasien.pasien_id)
                this.$apirsds.setHeader('x-authorization-token', Response.result.token);
                this.isLoading = false;
            }).catch(error => {
                console.log(error.response.data.message);
                this.tampilkan_warning = true;
                this.isLoading = false;
            })

        }
    }
}
</script>