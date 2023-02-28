<template>
    <v-container>
        <v-card
            color="#385F73"
            dark
            mt="5"
            >
            <v-row 
            class="justify-end my-3 mx-3"
            >
                <NuxtLink to="/pasien_umum/pilih_tanggal">
                    <v-btn color="green" class="mx-2 my-3 mt-5" small>
                        <v-icon
                            dark
                            left
                        >
                            mdi mdi-location-enter
                        </v-icon>
                        Lanjutkan
                    </v-btn>
                </NuxtLink>
                <!-- {{ $store.state.pasien.data_pasien }} -->
            </v-row>
            <v-simple-table light>
                <template v-slot:default>
                     <tbody>
                        <tr>
                            <td>NO RM</td>
                            <td>{{ data_pasien.no_rekam_medik }}</td>
                        </tr>
                        <tr>
                            <td>Nama Pasien</td>
                            <td>{{ data_pasien.nama_pasien }}</td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td>{{ data_pasien.tanggal_lahir }}</td>
                        </tr>
                        <tr>
                            <td>Alamat Pasien</td>
                            <td>{{ data_pasien.alamat_pasien }}</td>
                        </tr>
                        <tr>
                            <td>Jenis Pasien</td>
                            <td>Umum</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>{{ data_pasien.jeniskelamin }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-container>
</template>


<script>
export default{
    data(){
        return{
            data_pasien: this.$route.params,
            data_pasien_store : ''
        }
    },
    methods: {
        async cekPasienStore(){
            this.data_pasien_store = this.$store.state.pasien.data_pasien;

            // if(this.$route.params){
            //     this.data_pasien = this.$route.params;
            // }

            if (this.data_pasien_store){
                this.data_pasien = this.data_pasien_store;
            } else{
                this.$router.push({name: 'umum'});
            }
        }
    }
    ,
    mounted(){
        
        this.cekPasienStore();
    }
}
</script>