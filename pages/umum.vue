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
                    <v-text-field v-if="jenisidentitas == 'NO RM'"
                        label="NO RM"
                    ></v-text-field>
                    <v-text-field v-if="jenisidentitas == 'KTP'"
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
                                v-model="date"
                                label="TANGGAL LAHIR"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
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
                            <NuxtLink to="/">
                                <v-btn color="green" class="mx-2" small>
                                <v-icon
                                    dark
                                    left
                                >
                                    mdi mdi-location-enter
                                </v-icon>
                                Verifikasi 
                                </v-btn>
                            </NuxtLink>
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
            jenisidentitas:'NO_RM',
            date: '',
            menu: false,
            modal: false,
            menu2: false,
        }
    }
}
</script>