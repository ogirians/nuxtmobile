<template>
    <v-container
      class="mx-auto"
    >
        <PilihTanggal :prop_jenis_pendaftaran="'umum'"/>
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
        this.$store.commit('global/set_jenis_form', 'C')
    }

}
</script>;