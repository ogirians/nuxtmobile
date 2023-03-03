<template>
    <v-container>
        <!-- <v-row class="mt-3 mb-3 justify-end">
            <v-btn dark flat color="green" class="ma-3">
                <v-icon>mdi mdi-arrow-left</v-icon>
            </v-btn>
        </v-row> -->
        <v-card class="mx-auto" max-width="500">
            <v-card-text class="text-h8 text-md-h5 text-center">
                <b>RSUD Dr. Soetomo </b><br>
                Jl.Mayjen Prof.Dr.Moestopo No.6-8,Airlangga<br>
                Surabaya<br>
                Telepon : (031) 5501078
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="text-center">
                {{ $store.state.global.poli }} <br>
                {{ $store.state.global.subDivisi }} <br>
                <br>
                Nomor Antrian : {{$store.state.global.no_antrian}} <br>
                <br>               
                <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
                <br>
                <b>{{ $store.state.pasien.data_pasien.nama_pasien }}</b><br>
                {{ $store.state.pasien.data_pasien.no_rekam_medik }}<br>
                Pasien umum <br>
                tanggal berkunjung : <b>{{ $store.state.global.tanggal.hari}},  {{ $store.state.global.tanggal.tgl}}</b>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-end">
                  <NuxtLink to="/">
                    <v-btn color="green" small class="ma-3">
                      <v-icon
                        dark
                        center
                        color="white"
                      >
                        mdi mdi-arrow-left
                      </v-icon>
                    </v-btn>
                  </NuxtLink>
                  <NuxtLink to="/">
                    <v-btn color="info" small class="mr-3">
                      <v-icon
                        dark
                        center
                        color="white"
                      >
                      mdi mdi-download
                      </v-icon>
                    </v-btn>
                  </NuxtLink>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default{
        // middleware: 'pasienStore'
        data() {
            return {
                value : this.$store.state.global.no_antrian,
                size : 150
            }
        },
        components: {
            QrcodeVue,
        },  
    }
</script>