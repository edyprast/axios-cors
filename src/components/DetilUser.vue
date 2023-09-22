
<template>
  <p>Halaman Detil User</p>
  <pre>Data User {{ $store.getters["profiluserModule/getUser"] }}</pre>
  <pre>Hak Unit{{ $store.getters["profiluserModule/getHakUnit"] }}</pre>
</template>

<script>
export default {
  name: "DetilUser"
}
</script>
<style scoped>

</style>