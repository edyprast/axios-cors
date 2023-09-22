<template>
  <div>
    <router-link to="/login">Login</router-link> |
    <router-link to="/detiluser">Detil User</router-link>
  </div>
  <router-view/>
</template>

<script>
import aksescors from "./components/AksesCors.vue"
import teststore from "./components/TestStore.vue"

export default { 
  components : {aksescors,teststore}
}
</script>


<style scoped></style>
