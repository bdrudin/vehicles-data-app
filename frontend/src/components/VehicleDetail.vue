<template>
  <div class="vehicle-detail-container">
    <h1 class="vehicle-detail-title">Detail Kendaraan</h1>
    <div class="vehicle-detail-content">
      <p>Nomor Registrasi: {{ vehicle.nomor_registrasi }}</p>
      <p>Nama Pemilik: {{ vehicle.nama_pemilik }}</p>
      <p>Alamat: {{ vehicle.alamat }}</p>
      <p>Merk: {{ vehicle.merk }}</p>
      <p>Tahun Pembuatan: {{ vehicle.tahun_pembuatan }}</p>
      <p>Kapasitas Silinder: {{ vehicle.kapasitas_silinder }} cc</p>
      <p>Warna: {{ vehicle.warna }}</p>
      <p>Bahan Bakar: {{ vehicle.bahan_bakar }}</p>
      <router-link :to="{ name: 'home' }" class="btn-back">Kembali</router-link>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        vehicle: {}
      }
    },
    created() {
      this.fetchVehicle()
    },
    methods: {
      async fetchVehicle() {
        try {
          const response = await axios.get(`/vehicles/${this.$route.params.id}`)
          this.vehicle = response.data
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  </script>
  <style scoped>
  .vehicle-detail-container {
    /* padding: 10px; */
    /* margin-top: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5em;
  }
  .vehicle-detail-title {
    /* font-size: 36px; */
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  }
  .vehicle-detail-content {

    width: 70%;
    background-color:gray ;
    border-top-left-radius: 10%;
    border-bottom-right-radius: 10%;
    padding: 30px;
    line-height: .5;
    color: whitesmoke;
    text-align: center;
  }

  .btn-back{
display: block;
  border-radius: 10%;
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
}
.btn-add:hover {
  opacity:40%;
  background-color: #9e9e9e;
  color: black;
}
</style>
