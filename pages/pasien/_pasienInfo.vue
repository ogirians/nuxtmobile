<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
            <!-- <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
                </tr>
            </thead> -->
            <tbody>
                <tr>
                    <td>NO RM</td>
                    <td>{{ data_pasien.no_rekam_medik }}</td>
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
                    <td>Alamat Pasien</td>
                    <td>{{ data_pasien.alamat_pasien }}</td>
                </tr>
                <tr>
                    <td>Jenis Pasien</td>
                    <td>Umum</td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>{{ data_pasien.jeniskelamin }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>


<script>
export default{
    data(){
        return{
                //header table
                // headers: [
                //         {
                //             text: 'Dessert (100g serving)',
                //             align: 'start',
                //             value: 'name',
                //         },
                //         ],
                // desserts: [
                // {
                //     name: 'Frozen Yogurt',
                //     calories: 159,
                //     fat: 6.0,
                //     carbs: 24,
                //     protein: 4.0,
                //     iron: 1,
                // },
                // {
                //     name: 'Ice cream sandwich',
                //     calories: 237,
                //     fat: 9.0,
                //     carbs: 37,
                //     protein: 4.3,
                //     iron: 1,
                // },
                // {
                //     name: 'Eclair',
                //     calories: 262,
                //     fat: 16.0,
                //     carbs: 23,
                //     protein: 6.0,
                //     iron: 7,
                // },
                // ],
            data_pasien: this.$route.params,

        }
    }

    
}
</script>