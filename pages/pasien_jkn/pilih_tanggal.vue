<template>
    <v-container
      class="mx-auto"
    >
        <PilihTanggal :jenis_pendaftaran="'jkn'"/>
    </v-container>
  </template>

<script>

export default{
    middleware: 'pasienStore',
    data(){
     return{
        
     }
    },
    methods : {
        
    },
    mounted(){
        
    }

}
</script>;