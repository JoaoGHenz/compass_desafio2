<template>
    <div>
        <CardTitle  class="title"/>
        <CardBody class="body" />
    </div>
</template>

<script>
import CardTitle from './CardTitle.vue'
import CardBody from './CardBody'

export default {
    name: "MainCard",
    components: { 
        CardTitle,
        CardBody
     }
}
</script>

<style>
    
.title {
    width: 82%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    font-family: 'Inter';
}

.body {
    width: 82%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;

}


.body input{
    border: 2px solid #AAAAAA;
}

</style>