<template>
    <div>
        <div style="text-align: center; margin: auto; width: 50%;">
            <b>RSUD Dr. Soetomo </b><br>
            Jl.Mayjen Prof.Dr.Moestopo No.6-8,Airlangga<br>
            Surabaya<br>
            Telepon : (031) 5501078
        </div>
        <br>
        <v-divider></v-divider>
        <br>
        <br>
        <div style="text-align: center; margin: auto; width: 50%;">
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
        </div>
    </div>

</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default{
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