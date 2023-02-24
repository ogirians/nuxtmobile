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
            v-for="list in list_poli"
            cols="6"
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
                            <v-card-title class="justify-center info" ><div class="text-sm-h8                                                                                                                                                                                                                                            " style="color: white">{{ list.ruangan_nama }}</div></v-card-title>
                            </v-container>
                            <v-card-text class="justify-end">
                                <v-row class="justify-center">
                                    {{ list.instalasi_nama }} 
                                </v-row>
                            </v-card-text>
                            
                        </v-card>
                </v-hover>
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
            // token : localStorage.getItem("authToken")
        }
    },
    mounted(){
            var token = localStorage.getItem("authToken");
            this.$apirsds.setHeader('x-authorization-token', token);
            this.$apirsds.$get('/api/umum/poli-rawat-jalan/all'
                
            ).then(Response => { 
                this.list_poli = Response.result;
            }).catch(error => {
                console.log(error.response.data.message);
                // this.tampilkan_warning = true;

            })
    }
}
</script>