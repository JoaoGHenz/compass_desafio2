<template>
    <div class="success-card">
        <img src="../assets/cloud.png" class="logo" alt="logo">
        <h1 class="success-title">Success!</h1>
        <router-link to="/" class="button" tag="button">Go Back!</router-link>
    </div>
</template>

<script>
export default {
    name: "SuccessCard"
}
</script>

<style scoped>
    .success-card {
        display: flex;
        justify-content: space-evenly;

    }

    .success-title {
        font-size: 40px;
    }

    .button {
        height: 20%;
        width: 40%;
        font-size: 40px;

    }

    @media only screen and (max-width: 768px) {
        .success-card {
            justify-content: center;
        }
        
        .button {
            height: 10%;
            width: 85%;

        }
    }
</style>