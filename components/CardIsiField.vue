<template>
    <v-col cols="12">
        <v-card
        color="#385F73"
        dark
        >
            <v-card-title>
                pendaftaran {{ jenis_pendaftaran }}
            </v-card-title>
            <v-card-subtitle>silahkan isi field berikut</v-card-subtitle>
            <!-- <v-card-text>nama</v-card-text> -->
        </v-card>
    </v-col>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    props : {
        jenis_pendaftaran : ''
    }
}
</script>