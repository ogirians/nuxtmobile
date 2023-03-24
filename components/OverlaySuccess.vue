<!-- how to use it 
 example :
    <OverlaySuccess :prop_overlay.sync="overlay" :success="success" :to="path"/>
    <v-btn @click="overlay = !overlay">test overlay</v-btn>
 
 note :
    :success -> true or false 
    :to -> path mau kehalaman apa setelah tampil overlay  

(on parent)
 data :
 overlay : false, set to true to show OverlaySuccess
-->
<template>
    <v-overlay :value = "overlay">
        <v-progress-circular
            v-if = "loadingSimpan"
            indeterminate
            size="64"
        ></v-progress-circular>
        <v-slide-y-transition>
            <div v-if = "berhasilSimpan"
                    class="pa-7 green rounded-circle d-inline-block">
                <v-icon
                    color="white"
                    large
                    size="80"
                >mdi mdi-check-outline
                </v-icon>
            </div>
        </v-slide-y-transition>
        <v-slide-y-transition>
            <div v-if = "gagalSimpan"
                    class="pa-7 error rounded-circle d-inline-block">
                <v-icon
                    color="white"
                    large
                    size="100"
                >mdi mdi-close
                </v-icon>
            </div>
        </v-slide-y-transition>
    </v-overlay>
</template>

<script>
export default{
    props: {
        success : '',
        prop_overlay : '',
        to :''
    },  
    data(){
        return{
            overlay : false,
            loadingSimpan : false,
            berhasilSimpan : false,
            gagalSimpan : false,
        }
    },
    methods : {
        tampilkan(){
            this.overlay = true;
            this.loadingSimpan = true;

            setTimeout(() => {this.loadingSimpan = false}, 1500);
            
            if(this.success == true){
                setTimeout(() => {this.berhasilSimpan = true}, 1500);
                setTimeout(() => {this.berhasilSimpan = false}, 3000);
            }else{
                setTimeout(() => {this.gagalSimpan = true}, 1500);
                setTimeout(() => {this.gagalSimpan = false}, 3000);
            }
            
            setTimeout(() => {this.overlay = false}, 3500);
            setTimeout(() => {this.loadingSimpan = false}, 3500);

            if(this.to){
                setTimeout(() => {this.$router.push({path : this.to})}, 3600);
            }
        }
    },
    watch :{
        prop_overlay : function(value){
            if(value == true) {
                this.overlay = true;
            } else{
                this.overlay = false;
            }
        },
        overlay : function(value){
            if(value == true){
                this.tampilkan()
            }else{
                this.$emit('update:prop_overlay', value);

            }
        }
        
    }
}
</script>