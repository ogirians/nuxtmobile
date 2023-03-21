<template>
    <v-container>
        <!-- <v-col cols="12"> -->
            <AlertPendaftaran v-if ="status_pendaftaran == true" />
        <!-- </v-col> -->
        <v-card
            color="#385F73"
            dark
            mt="5"
            >
            <v-row 
            class="justify-end my-3 mx-3"
            >
                <v-btn v-if="status_pendaftaran == false" color="green" class="mx-2 my-3 mt-5" small :disabled="status_pendaftaran == true" @click="overlay = true">
                    <v-icon
                        dark
                        left
                    >
                        mdi mdi-location-enter
                    </v-icon>
                    Lanjutkan
                </v-btn>
                <v-btn v-else color="green" class="mx-2 my-3 mt-5" small :disabled="status_pendaftaran == true">
                        <v-icon
                            dark
                            left
                        >
                            mdi mdi-location-enter
                        </v-icon>
                        Lanjutkan
                </v-btn>
            </v-row>
            <TabelinfoPasien :data_pasien_prop = "data_pasien" :data_bpjs_pasien_prop = "data_bpjs_pasien" :jenis_pendaftaran_prop = "jenis_pendaftaran"/>
            <v-overlay
            :value="overlay"
            >
                <v-container>
                    <v-card light>
                        <v-card-title class="flex justify-center text-center text-h4 text-md-h4 mb-5">
                            <v-icon
                            left
                            size="80"
                            color="green"
                            >
                            mdi mdi-help-circle-outline
                            </v-icon>
                        </v-card-title>
                        <v-card-subtitle class="text-center text-h6 text-md-h5 mx-5">
                            <b>
                                Apakah anda pilih Poli sesuai dengan rujukan BPJS ?
                            </b>
                        </v-card-subtitle>
                        <v-card-text class="text-center text-h7 text-md-h6 ">
                            Kode Poli : {{$store.state.pasien.data_bpjs_pasien.response.rujukan.poliRujukan.kode}} <br>
                            Nama Poli : {{$store.state.pasien.data_bpjs_pasien.response.rujukan.poliRujukan.nama}} 
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn
                                class="white--text mb-5"
                                color="primary"
                                @click="pilih_tanggal('B')"
                                small
                            >
                                Ya
                            </v-btn>
                            <v-btn
                                class="white--text mb-5"
                                color="teal"
                                @click="pilih_tanggal('A')"
                                small
                            >
                                Tidak, pilih poli lainnya
                            </v-btn>
                            <v-btn
                                class="white--text mb-5"
                                color="accent"
                                @click="overlay = false"
                                small
                            >
                                batal
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-overlay>
        </v-card>
    </v-container>
</template>
<script>
export default{
    middleware: 'pasienStore',
    data(){
        return{
            data_pasien: this.$route.params.pasien ? this.$route.params.pasien : this.$store.state.pasien.data_pasien ,
            data_pasien_store : '',
            status_pendaftaran : this.$route.params.status ? this.$route.params.status : false ,
            data_bpjs_pasien : this.$route.params.bpjs ? this.$route.params.bpjs : this.$store.state.pasien.data_bpjs_pasien.response ,
            jenis_pendaftaran : 'jkn',
            overlay : false,
            rujukan : this.$store.state.pasien.data_bpjs_pasien.response.rujukan
        }
    },
    methods : {
        pilih_tanggal(jenis_form){
                 this.$store.commit('global/set_jenis_form',jenis_form)
            // if(jenis_form == 'B'){
                this.$store.commit('pendaftaran/set_kode_subpoli', this.rujukan.poliRujukan.kode);
                this.$store.commit('pendaftaran/set_namaperujuk', this.rujukan.provPerujuk.nama);
                this.$store.commit('pendaftaran/set_tglkunjungan',  this.rujukan.tglKunjungan);
                this.$store.commit('pendaftaran/set_kodeppt', this.rujukan.provPerujuk.kode);
                this.$store.commit('pendaftaran/set_no_rujukan',  this.rujukan.noKunjungan);
                this.$store.commit('pendaftaran/set_diagnosa_rujukan', this.rujukan.diagnosa.nama);
                this.$store.commit('pendaftaran/set_kode_diagnosa', this.rujukan.diagnosa.kode);
                this.$store.commit('pendaftaran/set_faskes', this.$store.state.pasien.data_bpjs_pasien.response.asalFaskes);
            // }
            this.$router.push({name : 'pasien_jkn-pilih_tanggal'})
        }
    }
}
</script>