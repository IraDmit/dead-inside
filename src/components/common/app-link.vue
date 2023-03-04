<template>
    <a v-if="to === null || to === ''" href="#"><slot/></a>
    <router-link v-else-if="!isExternal" :to="to"><slot/></router-link>
    <a v-else-if="to || to !== '' " :href="to"><slot/></a>
</template>

<script>
    export default {
        props:{
            to:{
                type: [String, Object],
                default: null,
            }
        },
        computed: {
            isExternal() {
                if(typeof this.to === 'string'){
                    if (this.isExternalURL(this.to)) return true
                    else return false
                }
                else if ( typeof this.to === 'object' ) {
                    return false
                } else {
                    return false
                }
            }
        },
        methods:{
            isExternalURL(url){
                if(url.includes('http')) return true
                else if (url.includes('@')) return true
                else return false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>