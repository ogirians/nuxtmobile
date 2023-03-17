<template>
    <v-row>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            >
                <v-card-title>
                    pendaftaran {{ jenis_pendaftaran }}
                </v-card-title>
                <v-card-subtitle>silahkan pilih tanggal yg tersedia</v-card-subtitle>
                <!-- <v-card-text>nama</v-card-text> -->
            </v-card>
        </v-col>
        <v-col
            v-for="list in listTanggal"
            class="col-6 col-md-4"
            >
                <v-hover
                v-slot="{ hover }"
                open-delay="200"
                >
                    <NuxtLink :to="{name : linkRouter, params : {data_tgl : list.value, tgl : list.tgl, hari: list.hr}}" style="text-decoration: none">
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
                            <v-card-title class="justify-center info" ><div class="text-caption text-md-h4 text-lg-h2" style="color: white">{{ list.hr }}</div></v-card-title>
                            </v-container>
                            <v-card-text class="justify-end">
                                <v-row class="justify-center">
                                    {{ list.tgl }} 
                                </v-row>
                            </v-card-text>
                            
                        </v-card>
                    </NuxtLink>
                </v-hover>
        </v-col>
    </v-row>
</template>

<script>
export default{
    props : {
        // listTanggal : [],
        jenis_pendaftaran : '',
    },
    data(){
        return {
            listTanggal : [],
            linkRouter : 'pasien_'+this.jenis_pendaftaran+'-poli-pilih_poli'
        }
    },
    methods : {
        setHari(){
            let banyak_hari = 7;
            let tanggal = '';
            let hari = '';
            let hari_set = '';
    
            for (let i = 0; i < banyak_hari; i++) {
                hari_set = this.$moment().add(i, 'days').format('YYYY-MM-DD 00:00:00');
                tanggal = this.$moment().add(i, 'days').format('DD MMMM YYYY');
                hari = this.$moment().add(i, 'days').format('dddd');
                this.listTanggal.push({tgl : tanggal, hr : hari, value : hari_set});
            } 
        }
    },
    mounted(){
        this.setHari();
    }
}
</script>