<template>
    <v-simple-table light>
        <template v-slot:default>
                <tbody>
                <tr>
                    <td>NO RM</td>
                    <td>{{ data_pasien.no_rekam_medik }}</td>
                </tr>
                <tr>
                    <td>KTP</td>
                    <td>{{ data_pasien.no_ktp }}</td>
                </tr>
                <tr>
                    <td>Nama Pasien</td>
                    <td>{{ data_pasien.nama_pasien }}</td>
                </tr>
                <tr>
                    <td>Tanggal Lahir</td>
                    <td>{{ data_pasien.tanggal_lahir }}</td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>{{ data_pasien.jeniskelamin }}</td>
                </tr>
                <tr>
                    <td>Alamat Pasien</td>
                    <td>{{ data_pasien.alamat_pasien }}</td>
                </tr>
                <tr>
                    <td>Tanggal Rekam Medik</td>
                    <td>{{ data_pasien.tgl_rekam_medik }}</td>
                </tr>
                <tr v-if = "jenis_pendaftaran == 'jkn'">
                    <td>Asal Faskes</td>
                    <td>{{ data_bpjs_pasien.asalFaskes }}</td>
                </tr>
                <tr v-if = "jenis_pendaftaran == 'jkn'">
                    <td>Rumah Sakit Perujuk</td>
                    <td>{{ data_bpjs_pasien.rujukan.provPerujuk.nama }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>
export default{
    middleware: 'pasienStore',
    props: {
        data_pasien_prop : '',
        data_bpjs_pasien_prop : '',
        jenis_pendaftaran_prop : '',
    },
    data(){
        return {
            data_pasien : this.data_pasien_prop,
            data_bpjs_pasien : this.data_bpjs_pasien_prop,
            jenis_pendaftaran : this.jenis_pendaftaran_prop,
        }
    },
}
</script>