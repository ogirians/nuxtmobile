export const state = () => ({
    poli : '',
    subDivisi : '',
    tanggal : '',
    no_antrian : '',
    
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
    clear_state(state){
        // state = {
        //     poli : '',
        //     subDivisi : '',
        //     tanggal : '',
        //     no_antrian : '',
        // }
        state.poli = '';
        state.subDivisi  = '';
        state.tanggal = '';
        state.no_antrian = '';
    }
}
