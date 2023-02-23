export const state = () => ({
     data_pasien: ''
  })
  
export const mutations = {
set(state, data) {
    state.data_pasien = data
},
remove(state, { data }) {
    state.list.pasien = ''
},
}
