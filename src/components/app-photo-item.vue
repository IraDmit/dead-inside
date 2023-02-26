<template>
    <div class="photoItem">
        <h2 class="title">{{photoItem.title}}</h2>
        <img :src="photoItem.thumbnailUrl" :alt="photoItem.title">
    </div>
</template>

<script>
    export default {
      props: {
        photoItem: {
            type: Object,
            default: ()=>{}
        },
      },  
    }
</script>

<style scoped>
.photoList {
    background-color: red;
}
.title{
	font-size: 24px;
}
</style>