export default function ({ store, redirect }) {
    // If pasien id tidak di temukan
    if (store.state.pendaftaran.form_pendaftaran.pasien_id == '') {
      return redirect('/')
    }
  }
  