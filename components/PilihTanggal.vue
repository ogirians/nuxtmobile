<template>
    <v-row>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            >
                <v-card-title>
                    pendaftaran {{ prop_jenis_pendaftaran }}
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
                    <v-card v-if="holiday.includes(list.hari_no_time) == true || list.hr == 'Sabtu' || list.hr == 'Minggu'"
                    :elevation="hover ? 16 : 2"
                    :class="{ 'on-hover': hover }"  
                    
                    >
                        <v-container
                        class="black--text align-end danger"
                        height="400px"
                        color="white"
                        style="background-color: red"
                        >
                        <v-card-title class="justify-center error" ><div class="text-caption text-md-h4 text-lg-h2" style="color: white">{{ list.hr }}</div></v-card-title>
                        </v-container>
                        <v-card-text class="justify-end">
                            <v-row class="justify-center">
                                {{ list.tgl }} 
                            </v-row>
                        </v-card-text>
                        
                    </v-card>
                    <NuxtLink v-else-if="prop_jenis_form != 'B'" :to="{name : linkRouter, params : {data_tgl : list.value, tgl : list.tgl, hari: list.hr}}" style="text-decoration: none">
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
                    <v-card v-else
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"  
                        @click="setData(list)"
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
                </v-hover>
        </v-col>
    </v-row>
</template>

<script>
import { runInThisContext } from 'vm';

export default{
    props : {
        // listTanggal : [],
        prop_jenis_pendaftaran : '',
        prop_jenis_form : ''
        
    },
    data(){
        return {
            listTanggal : [],
            linkRouter : 'pasien_'+this.prop_jenis_pendaftaran+'-poli-pilih_poli',
            dialog : false,
            holiday : []
        }
    },
    methods : {
        setHari(){
            let banyak_hari = 8;
            let tanggal = '';
            let hari = '';
            let hari_set = '';
            let hari_no_time = '';
    
            for (let i = 1; i < banyak_hari; i++) {
                hari_set = this.$moment().add(i, 'days').format('YYYY-MM-DD 00:00:00');
                tanggal = this.$moment().add(i, 'days').format('DD MMMM YYYY');
                hari = this.$moment().add(i, 'days').format('dddd');
                hari_no_time = this.$moment().add(i, 'days').format('YYYY-MM-DD');
                this.listTanggal.push({tgl : tanggal, hr : hari, value : hari_set, hari_no_time : hari_no_time});
            } 
        },
        setData(data){
            this.$store.commit('pendaftaran/set_date',data.value)
            this.$store.commit('pendaftaran/set_day',data.hr)
            this.$store.commit('pendaftaran/set_tglkunjungan', this.$moment(data.value).format('YYYY-MM-DD'))
            this.$store.commit('global/set_tanggal', {data_tgl : data.value, tgl : data.tgl, hari: data.hr});
            this.$store.commit('global/set_poli', this.$store.state.pasien.data_bpjs_pasien.response.rujukan.poliRujukan.nama);
            this.dialog = true;
            this.$emit('setDialog', this.dialog);
        },
        getHari(){
            this.$apirsds.get('/api/helper/get-holiday?start=2023-03-22&end=2023-03-30'
                ).then(Response => {
                   
                    Response.data.result.forEach(data => {
                        this.holiday.push(data.tglharilibur)
                    });
                    
                }).catch(error => {
                    console.log(error)
                        this.$router.push({name : 'index'})
                })
        },
    },
    mounted(){
        this.setHari();
        this.getHari();
    }
}
</script>