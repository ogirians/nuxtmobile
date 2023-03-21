<template>
    <div>
        <v-card
        color="#385F73"
        dark
        mt="5"
        class="mb-10"
        >   
             <v-row 
                class="my-3 mx-3"
            >
            <div class="mx-2 mt-4 text-h6 ">
                Informasi Pendaftaran
            </div>
            </v-row>
            <TabelinfoPendaftaran :data_pasien_prop = "data_pasien_full"/>
        </v-card>
        <v-card
        color="#385F73"
        dark
        mt="5"
        class="mb-10"
        >
            <v-row 
                class="my-3 mx-3"
            >
            <div class="mx-2 mt-4 text-h6 ">
                Informasi Pasien
            </div>
            </v-row>
            <TabelinfoPasien :data_pasien_prop = "data_pasien"/>
        </v-card>
    </div>
</template>

<script>
export default{
    data(){
        return{
            data_pasien: this.$route.params.pasien ? this.$route.params.pasien.data_pasien : this.$store.state.pasien.data_pasien,
            data_pasien_full : this.$route.params.pasien ? this.$route.params.pasien : this.$store.state.pasien.data_pasien,
            id_janji_poli : this.$route.params.pasien.id_janji_poli
        }
    }
}
</script>