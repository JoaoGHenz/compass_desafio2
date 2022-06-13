<template>
    <div>
        <CardTitle  class="title"/>

    </div>
</template>

<script>
import CardTitle from './CardTitle.vue'

export default {
    name: "MainCard",
    components: { CardTitle }
}
</script>

<style scoped>
    
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-family: 'Inter';
}

</style>