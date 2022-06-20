<template>
  <div id="app">
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,700" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
      
    <router-view class="maincard" />
  </div>
</template>

<script>
  import MainCard from './components/MainCard.vue'
  import SuccessCard from './components/SuccessCard.vue'

  

  export default {
    name: "app",
    components: { 
      MainCard,
      SuccessCard
    },
    data: {
      isSuccess: false
    }
}

</script>

<style>

html {
  height: 100%;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #ECEEF2
}

.maincard {
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 617px;
  height: 763px;
  background-color: white;
  flex-flow: wrap column;
  font-family: "Nunito", Arial, Helvetica, sans-serif;
}


@media only screen and (max-width: 768px) {

  #app {
    height: 100%;
    width: 100%;
  }
  
  body {
    margin: 0;
  }

  .maincard {
    height: 100%;
    border-radius: 0%;
    width: 100%;
  }

  .order-2 {
    order: 3;
  }

  .order-3 {
    order: 2;
  }

  .label-name, .label-email, .label-password {
    width: 100%;
  }

  .label-phone, .label-birthday {
    width: 40%;
  }

  .card-footer {
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .submit {
    width: 100%;
    height: 40%;
  }
  
  .button {
    height: 100%;
  }
  

}

</style>
