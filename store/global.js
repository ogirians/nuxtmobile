export const state = () => ({
    poli : '',
    subDivisi : '',
    tanggal : '',
    
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
}
