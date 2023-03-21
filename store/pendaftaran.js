export const state = () => ({
    //umum
    form_pendaftaran: {
        ruangan_id : '',
        pasien_id : '',
        jeniskasuspenyakit_id : '',
        day : '',
        date : '',
    },
    //jkn dengan pilih poli
    form_pendaftaran_jkn_a :{
        ruangan_id : '',
        pasien_id : '',
        jeniskasuspenyakit_id : '',
        day: '',
        date: '',
        namaperujuk: '',
        tglkunjungan: '',
        kodeppt: '',
        no_rujukan: '',
        diagnosa_rujukan: '',
        kode_diagnosa: '',
        faskes: ''
    },
    //jkn tanpa pilih poli
    form_pendaftaran_jkn_b : {
        kode_subpoli: '',
        pasien_id: '',
        day: '',
        date: '',
        namaperujuk: '',
        tglkunjungan: '',
        kodeppt: '',
        no_rujukan: '',
        diagnosa_rujukan:  '',
        kode_diagnosa: '',
        faskes: ''
    }
 })
 
export const mutations = {
    set_ruangan_id(state, data) {
        state.form_pendaftaran.ruangan_id = data;
        state.form_pendaftaran_jkn_a.ruangan_id = data;
    },
    set_pasien_id(state, data) {
        state.form_pendaftaran.pasien_id = data;
        state.form_pendaftaran_jkn_a.pasien_id = data;
        state.form_pendaftaran_jkn_b.pasien_id = data;
    },
    set_jeniskasuspenyakit_id(state, data) {
        state.form_pendaftaran.jeniskasuspenyakit_id = data;
        state.form_pendaftaran_jkn_a.jeniskasuspenyakit_id = data;
    },
    set_day(state, data) {
        state.form_pendaftaran.day = data;
        state.form_pendaftaran_jkn_a.day = data;
        state.form_pendaftaran_jkn_b.day = data;
    },
    set_date(state, data) {
        state.form_pendaftaran.date = data;
        state.form_pendaftaran_jkn_a.date = data;
        state.form_pendaftaran_jkn_b.date = data;
    },
    set_kode_subpoli(state,data){
        state.form_pendaftaran_jkn_b.kode_subpoli = data;
    },
    
    set_namaperujuk(state,data){
        state.form_pendaftaran_jkn_a.namaperujuk = data;
        state.form_pendaftaran_jkn_b.namaperujuk = data;
    },
    
    set_tglkunjungan(state,data){
        state.form_pendaftaran_jkn_a.tglkunjungan = data;
        state.form_pendaftaran_jkn_b.tglkunjungan = data;
    },
    
    set_kodeppt(state,data){
        state.form_pendaftaran_jkn_a.kodeppt = data;
        state.form_pendaftaran_jkn_b.kodeppt = data;
    },
    set_no_rujukan(state,data){
        state.form_pendaftaran_jkn_a.no_rujukan = data;
        state.form_pendaftaran_jkn_b.no_rujukan = data;
    },
    set_diagnosa_rujukan(state,data){
        state.form_pendaftaran_jkn_a.diagnosa_rujukan = data;
        state.form_pendaftaran_jkn_b.diagnosa_rujukan = data;
    },
    set_kode_diagnosa(state,data){
        state.form_pendaftaran_jkn_a.kode_diagnosa = data;
        state.form_pendaftaran_jkn_b.kode_diagnosa = data;
    },
    set_faskes(state,data){
        state.form_pendaftaran_jkn_a.faskes = data;
        state.form_pendaftaran_jkn_b.faskes = data;
    },



    //hapus form
    hapus_form(state) {
        state.form_pendaftaran = 
        {  
            ruangan_id : '',
            pasien_id : '',
            jeniskasuspenyakit_id : '',
            day : '',
            date : '',
        } 
    },
    hapus_form_a(state) {
        state.form_pendaftaran = 
        {  
            ruangan_id : '',
            pasien_id : '',
            jeniskasuspenyakit_id : '',
            day: '',
            date: '',
            namaperujuk: '',
            tglkunjungan: '',
            kodeppt: '',
            no_rujukan: '',
            diagnosa_rujukan: '',
            kode_diagnosa: '',
            faskes: ''
        } 
    },
    hapus_form_b(state) {
        state.form_pendaftaran = 
        {  
            kode_subpoli: '',
            pasien_id: '',
            day: '',
            date: '',
            namaperujuk: '',
            tglkunjungan: '',
            kodeppt: '',
            no_rujukan: '',
            diagnosa_rujukan:  '',
            kode_diagnosa: '',
            faskes: ''
        } 
    }
}