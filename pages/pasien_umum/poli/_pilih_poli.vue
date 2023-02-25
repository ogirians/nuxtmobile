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
                           <v-btn @click="searchPoli()" class="d-flex mt-n1">cari</v-btn>
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
            <v-col cols="12" md="6" xl="3" v-if = "isLoading ">
                <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
                >
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="6" xl="3" v-if = "isLoading ">
                <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
                >
                </v-skeleton-loader>
            </v-col>
            <v-col cols="12" class="d-flex justify-center mt-10" v-if="cari == '' || cari == null">
                <v-btn class="info" small @click="fetcPoli()">Load More..</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    data(){
        return {
            tgl_berkunjung : this.$route.params,
            list_poli : [],
            isLoading : false,
            cari: '',
            offset: 0
        }
    },
    methods: {
        async fetcPoli(){
            this.isLoading = true;
            // var token = localStorage.getItem("authToken");
            // this.$apirsds.setHeader('x-authorization-token', token);
            await this.$apirsds.$get('/api/umum/poli-rawat-jalan?limit=5&offset='+this.offset
            ).then(Response => { 
                Response.result.forEach(data => {
                    this.list_poli.push(data)
                })
                
                this.isLoading = false;
                this.offset = this.offset + 5;
            }).catch(error => {
                if (error.response.data.code){
                    this.$router.push({name : 'index'})
                }
                console.log(error.response.data.message);
                
        
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
    }
}
</script>