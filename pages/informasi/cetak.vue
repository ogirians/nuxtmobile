<template>
  <div>
    <v-container id="cetak">
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
                {{($store.state.global.jenis_form == 'C') ? 'Pasien Umum' : 'pasien JKN'}} <br>
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
                  <!-- <NuxtLink to="/"> -->
                    <v-btn @click="exportToPDF()" color="info" small class="mr-3">
                      <v-icon
                        dark
                        center
                        color="white"
                      >
                      mdi mdi-download
                      </v-icon>
                    </v-btn>
                  <!-- </NuxtLink> -->
            </v-card-actions>
        </v-card>
      </v-container>
      <div class="d-none" id="cetak2">
          <CetakPDF />
          <!-- <a>pdf halaman</a> -->
      </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import html2pdf from "html2pdf.js";
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

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
        methods : {
          async exportToPDF() {
            const options = {
              margin: [5, 5, 5, 5], // Set the margins of the PDF
              filename: 'my-document.pdf', // Set the name of the PDF file
              image: { type: 'jpeg', quality: 2 }, // Set the image quality of the PDF
              html2canvas: { scale: 4 }, // Set the scale of the PDF
              jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Set the format and orientation of the PDF
            };

            const element = document.getElementById("cetak2");
            
            if (Capacitor.getPlatform() === 'ios') {
                console.log('Running on iOS');
                // do something specific to iOS
            } else if (Capacitor.getPlatform() === 'android') {
                // do something specific to Android
                console.log('Running on Android');
                const pdfDataUri = await html2pdf().set(options).from(element).outputPdf('datauristring');
                await Filesystem.writeFile({
                    path: 'secrets/pendaftaran.pdf',
                    data: pdfDataUri,
                    directory: Directory.External,
                    // encoding: 'base64',
                    recursive: true
                  });

            } else if (Capacitor.getPlatform() === 'web'){
                console.log('Running on a web');
                html2pdf().set(options).from(element).save();
                // do something for any other platform
            }

          },
        } 
    }
</script>