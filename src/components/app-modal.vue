<template>
    <div class="modal" @click.self="$emit('close')">
        <div class="modal_content">
            form success
        <button @click="$emit('close')">close</button>
        </div>

    </div>
</template>

<script>
    export default {
        
        // mounted() {
        //     document.addEventListener("click", ({target})=>{
        //         if(target.classList.contains('modal')){
        //             this.$emit('close')
        //         }
        //     })
        // }
    }
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    flex-direction: column;
}
.modal_content{
    background-color: #fff;
    width: 540px;
    padding: 40px;
}
</style>