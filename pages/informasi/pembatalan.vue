<template>
    <div>
        <div class="d-flex flex-row-reverse mb-5">
            <v-btn @click="batalkan()" color="error">batalkan</v-btn>
        </div>
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
        <OverlaySuccess :prop_overlay.sync="overlay" :success="success" :to="path"/>
    </div>
</template>

<script>
export default{
    data(){
        return{
            data_pasien: this.$route.params.pasien ? this.$route.params.pasien.data_pasien : this.$store.state.pasien.data_pasien,
            data_pasien_full : this.$route.params.pasien ? this.$route.params.pasien : this.$store.state.pasien.data_pasien,
            id_janji_poli : this.$route.params.pasien.id_janji_poli,
            overlay : false,
            success : true,
            path : '/'
        }
    },
    methods: {
        async batalkan(){
            this.$apirsds.delete('/api/cancel/janji-poli/'+this.id_janji_poli)
            .then(Response => {
                console.log(Response)
                this.overlay = true;
            })
            .catch(error => {
                console.log(error)
                this.success = false;
                this.overlay = true
            })
        }        
    }
}
</script>