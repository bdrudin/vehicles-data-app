<template>
  <form @submit.prevent="search">
    <div class="search-bar">
      <div class="form-group">
          <label for="nomor_registrasi">Nomor Registrasi:</label><br>
          <input v-model="nomor_registrasi" type="text" id="nomor_registrasi" name="nomor_registrasi" placeholder="type here..." @change="searchVehicle">
      </div>
      <div class="form-group">
          <label for="nama_pemilik">Nama Pemilik:</label><br>
          <input v-model="nama_pemilik" type="text" id="nama_pemilik" name="nama_pemilik" placeholder="type here..." @change="searchVehicle">
      </div>
      <div class="form-group">
          <input type="submit" value="Search">
          <a class="btn-add" href="/add">Add</a>
      </div>
    </div>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nomor Registrasi</th>
          <th>Nama Pemilik</th>
          <th>Merk</th>
          <th>Tahun Pembuatan</th>
          <th>Kapasitas Silinder</th>
          <th>Warna</th>
          <th>Bahan Bakar</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle, index in vehicles" :key="vehicle.nomor_registrasi" class="colorize">
          <td>{{ index + 1 }}</td>
          <td>{{ vehicle.nomor_registrasi }}</td>
          <td>{{ vehicle.nama_pemilik }}</td>
          <td>{{ vehicle.merk }}</td>
          <td>{{ vehicle.tahun_pembuatan }}</td>
          <td>{{ vehicle.kapasitas_silinder + " cc"}}</td>
          <td>{{ vehicle.warna }}</td>
          <td>{{ vehicle.bahan_bakar }}</td>
          <td class="action-col">
            <router-link :to="{ name: 'detail', params: { id: vehicle.nomor_registrasi } }" class="detail">Detail</router-link>
            <router-link :to="{ name: 'edit', params: { id: vehicle.nomor_registrasi } }" class="edit">Edit</router-link>
            <button @click.prevent="deleteVehicle(vehicle.nomor_registrasi)" class="delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </form>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      vehicles: [],
      allVehicles: [],
      nomor_registrasi: '',
      nama_pemilik: '',
    }
  },
  created() {
    this.fetchVehicles()
  },
methods: {
    searchVehicle() {
      if(!this.nomor_registrasi && !this.nama_pemilik) {
        this.vehicles = []
      }
      let filteredVehicles = this.allVehicles.filter(vehicle => {
          return vehicle.nomor_registrasi.toLowerCase().includes(this.nomor_registrasi.toLowerCase()) && vehicle.nama_pemilik.toLowerCase().includes(this.nama_pemilik.toLowerCase())
      })
      this.vehicles = filteredVehicles
  },
    editVehicle(id) {
      this.$router.replace({ name: 'edit', params: { id: id } });
  },
    async getData() {
      try {
          const response = await axios.get('/vehicles').then(response => {
            this.vehicles = response.data
          });
          this.data = response.data;
      } catch (error) {
          console.log(error);
      }
  },
    async fetchVehicles() {
      try {
        const response = await axios.get('/vehicles').then(response => {
            this.allVehicles = response.data.vehicles;
            this.vehicles = response.data.vehicles;
          });
      } catch (err) {
        console.log(err)
      }
    },
    async deleteVehicle(id) {
      Swal.fire({
    title: 'Are you sure?',
    text: `Anda yakin akan menghapus data ${id}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.value) {
      try {
        await axios.delete(`/vehicles/${id}`)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.fetchVehicles() 
      } catch (error) {
        console.log(error)
      }
    }
  })
    },
    created() {
      console.log(this.getData())
    }
  },
}
</script>

<style scoped>
form {
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  border-radius: 10px;
}
label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}
input[type="text"], input[type="number"], select {
  width: 90%;
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
  opacity: 50%;
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
.btn-add{
  background-color: #ababab;
  color: rgb(26, 24, 24);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}
.btn-add:hover {
  opacity:40%;
  background-color: #9e9e9e;
  color: black;
}
/* .table-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
table {
  border-collapse: collapse;
  overflow-x: auto;
  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
}
th, td {
  border: 3px solid rgb(56, 52, 52);
  padding: 8px;
}
/* tr:hover {
  background-color: #dd8282;
} */
th {
  background-color: cornflowerblue;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
.detail{
  background-color: yellow;
  font-weight: bold;
  text-decoration: none;
}
.edit{
  background-color: aqua;
  font-weight: bold;
  text-decoration: none;
  border: 2px;

}
.delete{
  background-color: red;
  font-weight: bold;
  color : rgb(251, 255, 0);
}
.edit:hover, .delete:hover, .detail:hover{
  background: #9e9e9e;
}
.edit, .delete, .detail{
  padding: 5px;
}
/* .colorize{
  background-color: #dd8282;
} */
.colorize:hover {
  background-color: #dd8282;
}
</style>
  