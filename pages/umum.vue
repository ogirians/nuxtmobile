<template>
    <v-row>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            >
                <v-card-title>
                    pendaftaran Umum
                </v-card-title>
                <v-card-subtitle>silahkan isi field berikut</v-card-subtitle>
                <!-- <v-card-text>nama</v-card-text> -->
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-alert type="error" dismissible v-model="tampilkan_warning" transition="slide-bottom">
            anda belum terdaftar, Silahkan datang ke Soetomo
            </v-alert>
        </v-col>
        <v-col cols="12">
            <v-card
            color="#385F73"
            dark
            mt="5"
            >
                <!-- <v-card-title>
                    Nama
                </v-card-title> -->
                <!-- <v-card-subtitle>No RM</v-card-subtitle> -->
                <!-- <v-card-text>nama</v-card-text> -->
                <v-container>
                    <v-select
                    label="PILIH IDENTITAS"
                    :items="['KTP','NO RM']"
                    variant="underlined"
                    v-model="jenisidentitas"
                    ></v-select>
                    <v-text-field v-model="form.no_rm" v-if="jenisidentitas == 'NO RM'"
                        label="NO RM"
                    ></v-text-field>
                    <v-text-field v-model="form.no_ktp" v-if="jenisidentitas == 'KTP'"
                        label="NO KTP"
                    ></v-text-field>
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="form.tgl_lahir"
                                label="TANGGAL LAHIR"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="form.tgl_lahir"
                            scrollable
                            color="#385F73"
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(date)"
                            >
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>

                    <v-row class="justify-end my-3 mx-3">
                        <!-- <v-col cols="12"> -->
                            
                            <v-btn @click="verif_pasien()" color="green" class="mx-2" small>
                            <v-icon
                                dark
                                left
                            >
                                mdi mdi-location-enter
                            </v-icon>
                            Verifikasi 
                            </v-btn>
                            
                            <NuxtLink to="/">
                                <v-btn color="red" small>
                                    <v-icon
                                    dark
                                    left
                                    >
                                    mdi mdi-minus-circle-outline
                                    </v-icon>
                                    Kembali
                                </v-btn>
                            </NuxtLink>
                        <!-- </v-col> -->
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
    
</template>

<script>
export default{
    data(){
        return {
            form : {
                no_rm : '',
                no_ktp : '',
                tgl_lahir: ''
            },

            tampilkan_warning : false,
            jenisidentitas:'NO RM',
            date: '',
            menu: false,
            modal: false,
            menu2: false,
        }
    },
    methods: {
        //cek pasien apakah ada dalam database , harusnya gunakan fetch
        verif_pasien(){
            if (this.form.no_rm == '111' && this.form.tgl_lahir == '2023-02-19'){
                console.log('ok');
                this.$router.push({name: 'pasienInfo'})
            }
            else{
                console.log('fail');
                this.tampilkan_warning = true;
            }
        }
    }
}
</script>