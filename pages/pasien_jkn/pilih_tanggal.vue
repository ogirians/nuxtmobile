<template>
    <v-container
      class="mx-auto"
    >
        <PilihTanggal :prop_jenis_pendaftaran="'jkn'" :prop_jenis_form="jenis_form" @setDialog="set_dialog"/>
        <DialogSimpan :prop_dialog="dialog" @setDialog="set_dialog"/>
    </v-container>
  </template>

<script>

export default{
    middleware: 'pasienStore',
    data(){
     return{
        jenis_form : this.$store.state.global.jenis_form,
        dialog : false,
     }
    },
    methods : {
      set_dialog(data){
        this.dialog = data;
      }
        
    },
    mounted(){
        
    }

}
</script>;