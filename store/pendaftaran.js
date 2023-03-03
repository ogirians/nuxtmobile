export const state = () => ({
    form_pendaftaran: {
        ruangan_id : '',
        pasien_id : '',
        jeniskasuspenyakit_id : '',
        day : '',
        date : '',
    }
 })
 
export const mutations = {
    set_ruangan_id(state, data) {
    state.form_pendaftaran.ruangan_id = data;
    },
    set_pasien_id(state, data) {
    state.form_pendaftaran.pasien_id = data;
    },
    set_jeniskasuspenyakit_id(state, data) {
    state.form_pendaftaran.jeniskasuspenyakit_id = data;
    },
    set_day(state, data) {
    state.form_pendaftaran.day = data;
    },
    set_date(state, data) {
    state.form_pendaftaran.date = data;
    },
    hapus_form(state) {
        state.form_pendaftaran = 
        {  
            ruangan_id : '',
            pasien_id : '',
            jeniskasuspenyakit_id : '',
            day : '',
            date : '',
        } 
    }
    // remove(state, { data }) {
//    state.form_pendaftaran = '';
// 
}