export const state = () => ({
    poli : '',
    subDivisi : '',
    tanggal : '',
    no_antrian : '',
    //jenis_form = A : jkn dengan pilih poli, B : Jkn tanpa pilih poli , C : umum
    jenis_form : '',
    
 })

 export const mutations = {
    set_poli(state, data) {
    state.poli = data;
    },
    set_subDivisi(state, data) {
    state.subDivisi = data;
    },
    set_tanggal(state, data) {
    state.tanggal = data;
    },
    set_no_antrian(state, data) {
        state.no_antrian = data;
    },
    set_jenis_form(state, data) {
        state.jenis_form = data;
    },
    clear_state(state){
        state.poli = '';
        state.subDivisi  = '';
        state.tanggal = '';
        state.no_antrian = '';
    }
}
