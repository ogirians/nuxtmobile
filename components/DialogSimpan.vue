<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        >
        <v-card>
            <v-toolbar
            dark
            color="#385F73"
            >
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Ringkasan Pendaftaran</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-toolbar-items> -->
                <!-- <v-btn
                dark
                text
                @click="dialog = false"
                >
                Daftar
                </v-btn> -->
                <v-btn @click = "simpanPendaftaran()" color="green" class="mx-2 my-3 mt-3" small>
                    <v-icon
                        dark
                        left
                    >
                        mdi mdi-location-enter
                    </v-icon>
                    Mendaftar
                </v-btn>
            <!-- </v-toolbar-items> -->
            </v-toolbar>
            <v-simple-table light class="mt-5">
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td class="headder">NO RM</td>
                            <td>{{$store.state.pasien.data_pasien.no_rekam_medik}}</td>
                        </tr>
                        <tr>
                            <td class="headder">Nama Pasien</td>
                            <td>{{$store.state.pasien.data_pasien.nama_pasien}}</td>
                        </tr>
                        <tr>
                            <td class="headder">Tanggal Pendaftaran</td>
                            <td>{{$store.state.global.tanggal.hari}} - {{$store.state.global.tanggal.tgl}}</td>
                        </tr>
                        <tr>
                            <td class="headder">Poli</td>
                            <td>{{$store.state.global.poli}}</td>
                        </tr>
                        <tr>
                            <td class="headder">Sub Poli</td>
                            <td>{{$store.state.global.subDivisi ? $store.state.global.subDivisi : '-'}} </td>
                        </tr>
                        <tr>
                            <td class="headder">Jenis Pendaftaran</td>
                            <td>Umum</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
        <v-overlay :value="overlaySimpan">
            <v-progress-circular
                v-if = "loadingSimpan"
                indeterminate
                size="64"
            ></v-progress-circular>
            <v-slide-y-transition>
                <div v-if = "berhasilSimpan"
                        class="pa-7 green rounded-circle d-inline-block">
                    <v-icon
                        color="white"
                        large
                        size="80"
                    >mdi mdi-check-outline
                    </v-icon>
                </div>
            </v-slide-y-transition>
            <v-slide-y-transition>
                <div v-if = "gagalSimpan"
                        class="pa-7 error rounded-circle d-inline-block">
                    <v-icon
                        color="white"
                        large
                        size="100"
                    >mdi mdi-close
                    </v-icon>
                </div>
            </v-slide-y-transition>
        </v-overlay>
    </v-dialog>
</template>

<script>
export default{
    props : {
        prop_dialog : false,
    },
    data(){
        return{
            //dialog
            dialog: false,
            overlaySimpan : false,
            loadingSimpan : false,
            berhasilSimpan : false,
            gagalSimpan : false,
            notifications: false,
            sound: true,
            widgets: false,
            jenis_form : this.$store.state.global.jenis_form
        }
    },
    methods: {
        async simpanPendaftaran(){
            this.overlaySimpan = true ;
            this.loadingSimpan = true ;
            
            if(this.jenis_form == 'B'){
                await this.$apirsds.post('/api/jkn/buat-janji-poli-bpjs',this.$store.state.pendaftaran.form_pendaftaran_jkn_b
                ).then(Response => {
                    // console.log(Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('global/set_no_antrian', Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('pendaftaran/hapus_form')
                    setTimeout(() => {this.loadingSimpan = false}, 1500);
                    setTimeout(() => {this.berhasilSimpan = true}, 1500);
                    setTimeout(() => {this.berhasilSimpan = false}, 3000);
                    setTimeout(() => {this.$router.push({name:'informasi-cetak'})}, 5000);
                    
                }).catch(error => {
                    console.log(error)
                })
            }else if(this.jenis_form == 'A'){
                await this.$apirsds.post('/api/jkn/buat-janji-poli',this.$store.state.pendaftaran.form_pendaftaran_jkn_a
                ).then(Response => {
                    // console.log(Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('global/set_no_antrian', Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('pendaftaran/hapus_form')
                    setTimeout(() => {this.loadingSimpan = false}, 1500);
                    setTimeout(() => {this.berhasilSimpan = true}, 1500);
                    setTimeout(() => {this.berhasilSimpan = false}, 3000);
                    setTimeout(() => {this.$router.push({name:'informasi-cetak'})}, 5000);
                    
                }).catch(error => {
                    console.log(error)
                })
            }else if(this.jenis_form == 'C'){
                await this.$apirsds.post('/api/umum/buat-janji-poli',this.$store.state.pendaftaran.form_pendaftaran_jkn_a
                ).then(Response => {
                    // console.log(Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('global/set_no_antrian', Response.data.result.no_urutantri_subpoli);
                    this.$store.commit('pendaftaran/hapus_form')
                    setTimeout(() => {this.loadingSimpan = false}, 1500);
                    setTimeout(() => {this.berhasilSimpan = true}, 1500);
                    setTimeout(() => {this.berhasilSimpan = false}, 3000);
                    setTimeout(() => {this.$router.push({name:'informasi-cetak'})}, 5000);
                    
                }).catch(error => {
                    console.log(error)
                })
            }
            
        }
    },
    watch :{
        // dialog(){
        //     return this.prop_dialog;
        // }
        prop_dialog : function(value){
            if (value == true){
                this.dialog = true
            }else {
                this.dialog = false
                // this.$emit('setDialog',this.dialog)
            }
        },
        dialog : function(value){
            if (value == false){
                this.$emit('setDialog',this.dialog)
            }
        }
    }
}
</script>