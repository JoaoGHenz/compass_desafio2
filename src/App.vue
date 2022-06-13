<template>
  <div id="app">
    <MainCard />
    <router />
  </div>
</template>

<script>
  import MainCard from './components/MainCard.vue'
  

  export default {
    name: "app",
    components: { MainCard }
}

</script>

<style>

body {
  display: flex;
  border-radius: 20px;
  justify-content: center;
  background-color: #ECEEF2
}
</style>
