import Vue from 'vue'

Vue.filter('more10', (value) => {
    if ( value < 10  ) {
        return '0' + value
    } else {
        return value
     }
})

Vue.filter('toUpperCase', (value)=>{
    return value.toUpperCase();
})