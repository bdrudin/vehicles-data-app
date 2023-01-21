<template>
  <div class="modal">
    <form @submit.prevent="submitForm" >
      <div class="form-group">
        <label for="nomor_registrasi">Nomor Registrasi Kendaraan</label>
        <input
          v-model="form.nomor_registrasi"
          type="text"
          id="nomor_registrasi"
          name="nomor_registrasi"
          required
        />
      </div>
      <div class="form-group">
        <label for="nama_pemilik">Nama Pemilik</label>
        <input
          v-model="form.nama_pemilik"
          type="text"
          id="nama_pemilik"
          name="nama_pemilik"
          required
        />
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <textarea
          v-model="form.alamat"
          id="alamat"
          name="alamat"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="merk">Merk Kendaraan</label>
        <input
          v-model="form.merk"
          type="text"
          id="merk"
          name="merk"
        />
      </div>
      <div class="form-group">
        <label for="tahun_pembuatan">Tahun Pembuatan</label>
        <input
          v-model="form.tahun_pembuatan"
          type="number"
          id="tahun_pembuatan"
          name="tahun_pembuatan"
          min="1900"
          max="2022"
          maxlength="4"
        />
      </div>
      <div class="form-group">
        <label for="kapasitas_silinder">Kapasitas Silinder</label>
        <input
          v-model="form.kapasitas_silinder"
          type="number"
          id="kapasitas_silinder"
          name="kapasitas_silinder"
        />
      </div>
      <div class="form-group">
        <label for="warna">Warna</label>
        <select
          v-model="form.warna"
          id="warna"
          name="warna"
          required
        >
          <option value="Merah">Merah</option>
          <option value="Hitam">Hitam</option>
          <option value="Biru">Biru</option>
          <option value="Abu-Abu">Abu-Abu</option>
        </select>
      </div>
      <div class="form-group">
        <label for="bahan_bakar">Bahan Bakar</label>
        <input
          v-model="form.bahan_bakar"
          type="text"
          id="bahan_bakar"
          name="bahan_bakar"
          />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" />
        <button class="btn-back" @click="goBack">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import Swal from "sweetalert2"
export default {
  props: ['vehicle'],
  data() {
    return {
      form: {
        nomor_registrasi: '',
        nama_pemilik: '',
        alamat: '',
        merk: '',
        tahun_pembuatan: '',
        kapasitas_silinder: '',
        warna: '',
        bahan_bakar: '',
      },
      showInput: false,
    }
  },
  methods: {
    async submitForm() {
      axios.post('/vehicles', this.form)
        .then(response => {
          Swal.fire({
            title: 'Data berhasil disimpan!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    goBack() {
      this.$router.go(-1)
    },

    setData(data) {
    this.nomor_registrasi = data.nomor_registrasi
    this.nama_pemilik = data.nama_pemilik
    this.alamat = data.alamat
    this.merk = data.merk
    this.tahun_pembuatan = data.tahun_pembuatan
    this.kapasitas_silinder = data.kapasitas_silinder
    this.warna = data.warna
    this.bahan_bakar = data.bahan_bakar
  },
  },
}
</script>

<style scoped>
form {
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    border-radius: 10px;
}
label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}
input[type="text"], input[type="number"], select {
    width: 100%;
    padding: 10px 16px;
    margin-bottom: 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}
input[type="text"]:focus, input[type="number"]:focus, select:focus {
    border: 1px solid #4CAF50;
    box-shadow: 0 0 10px #4CAF50;
}
input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}
input[type="submit"]:hover {
    background-color: #45a049;
}
textarea {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    resize: vertical;
}
.btn-back {
    background-color: #ababab;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
}
.btn-back:hover {
    background-color: #9e9e9e;
}
</style>