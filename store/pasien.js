export const state = () => ({
     data_pasien: '',
     data_bpjs_pasien : '',
  })
  
export const mutations = {
set(state, data) {
    state.data_pasien = data
},
set_data_bpjs(state, data) {
    state.data_bpjs_pasien = data
},
clear(state){
    state.data_pasien = ''
    state.data_bpjs_pasien = ''
},
}
