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
                <NuxtLink v-if="status_pendaftaran == false" to="/pasien_umum/pilih_tanggal">
                    <v-btn color="green" class="mx-2 my-3 mt-5" small :disabled="status_pendaftaran == true">
                        <v-icon
                            dark
                            left
                        >
                            mdi mdi-location-enter
                        </v-icon>
                        Lanjutkan
                    </v-btn>
                </NuxtLink>
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
            <TabelinfoPasien :data_pasien_prop = "data_pasien" :jenis_pendaftaran_prop = "jenis_pendaftaran"/>
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
            status_pendaftaran : this.$route.params.status,
            jenis_pendaftaran : 'umum'
        }
    },
}
</script>