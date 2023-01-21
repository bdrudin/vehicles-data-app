<template>
  <div class="modal">
      <form>
        <h3>Detail Data Kendaraan</h3>
      <div class="form-group">
        <label for="nomor_registrasi">Nomor Registrasi:</label>
        <input type="text" id="nomor_registrasi" v-model="vehicle.nomor_registrasi" name="nomor_registrasi" disabled>
      </div>
      <div class="form-group">
        <label for="nama_pemilik">Nama Pemilik:</label>
        <input type="text" id="nama_pemilik" v-model="vehicle.nama_pemilik" name="nama_pemilik" disabled>
      </div>
      <div class="form-group">
        <label for="alamat">Alamat:</label>
        <input type="text" id="alamat" v-model="vehicle.alamat" name="alamat" disabled>
      </div>
      <div class="form-group">
        <label for="merk">Merk:</label>
        <input type="text" id="merk" v-model="vehicle.merk" name="merk" disabled>
      </div>
      <div class="form-group">
        <label for="tahun_pembuatan">Tahun Pembuatan:</label>
        <input type="text" id="tahun_pembuatan" v-model="vehicle.tahun_pembuatan" name="tahun_pembuatan" disabled>
      </div>
      <div class="form-group">
        <label for="kapasitas_silinder">Kapasitas Silinder:</label>
        <input type="text" id="kapasitas_silinder" v-model="vehicle.kapasitas_silinder" name="kapasitas_silinder" disabled>
      </div>
      <div class="form-group">
        <label for="warna">Warna:</label>
        <input type="text" id="warna" v-model="vehicle.warna" name="warna" disabled>
      </div>
      <div class="form-group">
        <label for="bahan_bakar">Bahan Bakar:</label>
        <input type="text" id="bahan_bakar" v-model="vehicle.bahan_bakar" name="bahan_bakar" disabled>
      </div>
      <div class="form-group">
        <!-- <button type="submit" class="submit-button">Edit this data</button> -->
        <button type="button" class="cancel-button" @click="cancel">Back</button>
      </div>
    </form>
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
            const response = await axios.get(`http://localhost:3333/vehicles/${this.$route.params.id}`)
            this.vehicle = response.data
        } catch (err) {
            console.log(err)
        }
    },
    async updateVehicle() {
    try {
        await axios.put(`http://localhost:3333/vehicles/${this.$route.params.id}`, this.vehicle)
        this.$router.push("/")
    } catch (err) {
        console.log(err)
    }
  },
  cancel() {
      this.$router.go(-1)
    },

}

}
</script>

<style scoped>
h3{
  text-align: center;
  margin-top: 0;
}
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
input[type="submit"], .submit-button {
    background-color: rgb(14, 121, 121);
    color:white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
}
.submit-button:hover {
  background-color: #9e9e9e;
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
.cancel-button {
    background-color: #2e1bda;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
    width: 90px;
}
.cancel-button:hover {
    background-color: #9e9e9e;
}
</style>