<script>
import axios from 'axios'
import FormData from 'form-data';

export default {
  data() {
    return {
      sukses: false,
      apiUrl1: "https://dbeviapp.essrex.my.id/api",
      apiUrl2: "http://jwt.localhost/api",
      dtuser: [],
      user: {
        email: "syifa.c@bpkp.go.id",
        password: "740006066"
      }
    }
  },
  methods: {
    handleLogin() {

      axios.post(this.apiUrl1 + "/login", {
        email: this.user.email,
        password: this.user.password,
      })
        .then((response) => {
          this.dtuser = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

    },

    handleListUser() {
    
      // Kirim permintaan axios
      axios.get(this.apiUrl1 + '/hakunit',{headers:{'Authorization': "Bearer "+this.dtuser.token}})
        .then(response => {
          console.log(JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }

  }

}
</script>

<template>
  <div class="mb-3">
    <button @click="handleLogin">Login</button>
    <pre>{{ this.dtuser }}</pre>
  </div>
  <div class="mb-3">
    <button @click="handleListUser">List User</button>
  </div>
</template>

<style scoped></style>