<template>
    <v-simple-table light>
        <template v-slot:default>
                <tbody>
                <tr>
                    <td>NO Antrian</td>
                    <td>{{ data_pendaftaran.no_urutantri_subpoli }}</td>
                </tr>
                <tr>
                    <td>Hari dipilih </td>
                    <td>{{ data_pendaftaran.harijadwal }}</td>
                </tr>
                <tr>
                    <td>Tanggal dipilih</td>
                    <td>{{ data_pendaftaran.tgljadwal }}</td>
                </tr>
                <tr>
                    <td>Poli dipilih</td>
                    <td>{{ data_poli_rj.ruangan_nama }}</td>
                </tr>
                <tr>
                    <td>Sub poli dipilih</td>
                    <td>{{ data_sub_poli.jeniskasuspenyakit_nama }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>
export default{
    middleware: 'pasienStore',
    props: {
        data_pasien_prop : ''
    },
    data(){
        return {
            data_pasien : this.data_pasien_prop.data_pasien,
            data_pendaftaran : this.data_pasien_prop.data_pendaftaran,
            data_poli_rj : this.data_pasien_prop.data_poli_rj,
            data_sub_poli : this.data_pasien_prop.data_sub_poli,
        }
    },
}
</script>