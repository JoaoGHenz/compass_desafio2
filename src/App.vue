<template>
  <div id="app">
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,700" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <MainCard class="maincard" />
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
  justify-content: center;
  background-color: #ECEEF2
}

.maincard {
  display: flex;
  border-radius: 20px;
  width: 617px;
  height: 763px;
  background-color: white;
  flex-flow: wrap column;
  font-family: "Nunito", Arial, Helvetica, sans-serif;
}


</style>
