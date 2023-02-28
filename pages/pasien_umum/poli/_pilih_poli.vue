<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card
                color="#385F73"
                dark
                >
                    <v-card-title>
                        pendaftaran Umum
                    </v-card-title>
                    <v-card-subtitle>silahkan pilih Poli untuk tanggal <b>{{ tgl_berkunjung.tgl }}</b></v-card-subtitle>
                    <!-- <v-card-text>nama</v-card-text> -->
                </v-card>
            </v-col>
            <v-col
            cols="12" 
            > 
                <v-text-field
                label="Cari Poli..."
                placeholder="Cari Poli ..."
                solo
                prepend-inner-icon="mdi mdi-magnify"
                v-model="cari"
                clearable
                @click:clear="cari = ''"
                >
                    <template v-slot:append-outer>                        
                           <v-btn @click="searchPoli()" :disabled="cari == '' || cari == null" class="d-flex mt-n1">cari</v-btn>
                    </template>
                </v-text-field>
                
            </v-col>
            <!-- <v-col  md="2">
                <v-btn class="info d-flex justify-end">cari</v-btn>
            </v-col> -->
           
            <v-col
            v-for="list in list_poli"
            cols="12" md="6" xl="3"
            >
                <v-hover
                v-slot="{ hover }"
                open-delay="200"
                >
                   
                        <v-card
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"  
                        @click = "setPoli(list)"
                        >
                            <v-container
                            class="black--text align-end"
                            height="400px"
                            color="white"
                            style="background-color: #385F73"
                            >
                            <v-card-text class="d-flex justify-center info text-wrap font-weight-bold text-sm-h9 text-md-h6" style="color: white;" >{{ list.ruangan_nama }}</v-card-text>
                            </v-container>
                            <v-card-text class="d-flex justify-center">
                                <!-- <v-row class="justify-center"> -->
                                    {{ list.instalasi_nama }} 
                                <!-- </v-row> -->
                            </v-card-text>
                            
                        </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12">
                <v-divider
                
                ></v-divider>
            </v-col>
            <v-col
            v-if="list_SubDivisi.length > 0"
            v-for="list in list_SubDivisi"
            cols="12" md="6" xl="3"
            >
                <v-hover
                v-slot="{ hover }"
                open-delay="200"
                >
                   
                        <v-card
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        @click = "setSubDivisi(list)"  
                        >
                            <v-container
                            class="black--text align-end"
                            height="400px"
                            color="white"
                            style="background-color: #385F73"
                            >
                            <v-card-text class="d-flex justify-center secondary text-wrap font-weight-bold text-sm-h9 text-md-h6" style="color: white;" >{{ list.jeniskasuspenyakit_nama }}</v-card-text>
                            </v-container>
                            <v-card-text class="d-flex justify-center">
                                <!-- <v-row class="justify-center"> -->
                                    total antrian : {{ list.total_antrian }} 
                                <!-- </v-row> -->
                            </v-card-text>
                            
                        </v-card>
                </v-hover>
            </v-col>
            <v-col v-for="lim in limit" cols="12" md="6" xl="3" v-if = "isLoading ">
                <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
                >
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mt-10" v-if="(cari == '' || cari == null) && poli_pilihan == ''">
                <v-btn class="info" small @click="fetcPoli()">Load More..</v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mt-10" v-if="poli_pilihan != ''">
                <v-btn class="info" small @click="fetcPoli()">reload</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    middleware: 'pasienStore',
    data(){
        return {
            tgl_berkunjung : this.$route.params.data_tgl ?  this.$route.params : this.$store.state.global.tanggal,
            list_poli : [],
            list_SubDivisi : [],
            isLoading : false,
            cari: '',
            limit : 6,
            offset: 0,
            poli_pilihan : '',
            subDivisi_pilihan : ''

        }
    },
    methods: {
        async fetcPoli(){
            this.isLoading = true;
            // var token = localStorage.getItem("authToken");
            // this.$apirsds.setHeader('x-authorization-token', token);
            await this.$apirsds.$get('/api/umum/poli-rawat-jalan?limit='+this.limit+'&offset='+this.offset
            ).then(Response => { 
                if(this.poli_pilihan != ''){
                    this.list_poli = [];
                    this.offset = 0;
                    this.poli_pilihan = '';
                    this.list_SubDivisi = '';
                    this.cari='';
                }
                
                Response.result.forEach(data => {
                    this.list_poli.push(data)
                })
                
                this.isLoading = false;
                
                this.offset = this.offset + 6;

            }).catch(error => {
                if (error.response.data.code){
                    this.$router.push({name : 'index'})
                }
                console.log(error.response.data.message);
                
        
            })
        },
        async fetchSubDivisi(){
            
            await this.$apirsds.$get('/api/umum/poli-subdivisi/' + this.poli_pilihan.ruangan_id
            ).then(Response => {
                if (Response.result.length > 0){
                    Response.result.forEach(data => {
                        this.list_SubDivisi.push(data);
                    })
                } else {
                    this.$router.push({name : 'pasien_umum-ringkasan'})
                }
            })
        },
        async searchPoli(){
            this.isLoading = true;
            this.list_poli = [];
            // var token = localStorage.getItem("authToken");
            // this.$apirsds.setHeader('x-authorization-token', token);
            await this.$apirsds.$post('/api/umum/search-poli', {ruangan_nama : this.cari}
            ).then(Response => { 
                Response.result.forEach(data => {
                    this.list_poli.push(data)
                })
                
                this.isLoading = false;
            }).catch(error => {
                if (error.response.data.code){
                    this.$router.push({name : 'index'})
                }
                console.log(error.response.data.message);
                
        
            })
        },
        async setPoli(data){
            this.list_poli = [];
            this.list_poli.push(data); 
            this.poli_pilihan = data;
            this.offset = 0;
            this.list_SubDivisi = [];
            this.fetchSubDivisi();
            this.$store.commit('pendaftaran/set_ruangan_id', this.poli_pilihan.ruangan_id)
            this.$store.commit('pendaftaran/set_jeniskasuspenyakit_id', '')
            this.$store.commit('global/set_poli', this.poli_pilihan.ruangan_nama + ' - ' +this.poli_pilihan.instalasi_nama)
            this.$store.commit('global/set_subDivisi', '')

        },
        async setSubDivisi(data){
            this.subDivisi_pilihan = data;
            this.$store.commit('pendaftaran/set_jeniskasuspenyakit_id', this.subDivisi_pilihan.jeniskasuspenyakit_id);
            this.$store.commit('global/set_subDivisi', this.subDivisi_pilihan.jeniskasuspenyakit_nama);
            this.$router.push({name : 'pasien_umum-ringkasan'});

        }
    },
    computed: {

    },
    watch : {
        cari : function(value) {
            if (value == ''){
                this.offset = 0;
                this.list_poli = [];
                this.fetcPoli();
            }
        }
    },
    mounted(){
        this.fetcPoli();
        if (this.tgl_berkunjung == ''){
            this.$router.push({name : 'index'})
        }else{
            this.$store.commit('pendaftaran/set_day', this.tgl_berkunjung.hari);
            this.$store.commit('pendaftaran/set_date', this.tgl_berkunjung.data_tgl);
            this.$store.commit('global/set_tanggal', this.tgl_berkunjung);
        }
    }
}
</script>