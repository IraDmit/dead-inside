<template>
  <div>
    <input
      type="text"
      placeholder="name"
      @input="filterName($event.target.value.toLowerCase())"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
        resultArr: null,
        tempArr: null
    }
  },computed:{
    ...mapGetters(['getUsersRes']),
  },
  methods: {
    ...mapActions(['setFilterUsers']),
    filterName(value) {
        console.log(value)
      let arr = [];
      if (value.length && this.getUsersRes) {
        this.getUsersRes.forEach((el) => {
          // console.log(value)
          //   for (const iter in el) {
          //     // if(el[iter] !== 'address'){
          //     // console.log(typeof el[iter])
          //     if ( typeof el[iter] === 'object' ) {
          //       // console.log('object: '+el[iter])
          //     } else if ( typeof el[iter] === 'string' ) {
          //       console.log(value)
          //       // el[iter].search(value) !== -1 ? arr.push(el)  : false
          //     }
          //       // for (const key in iter) {
          //         // console.log(iter[key]);
          //         // if (iter[key].search(value) == 0) arr.push(el)
          //         // }
          //       // }
          //       // else if (el[iter].search(value) == 0) arr.push(el);
          //     }
          if (
            el.name.toLowerCase().search(value) == 0 ||
            el.username.toLowerCase().search(value) == 0 ||
            el.email.toLowerCase().search(value) == 0 ||
            el.address.street.toLowerCase().search(value) == 0 ||
            el.address.suite.toLowerCase().search(value) == 0 ||
            el.address.city.toLowerCase().search(value) == 0 ||
            el.address.zipcode.toLowerCase().search(value) == 0 ||
            el.address.geo.lat.toLowerCase().search(value) == 0 ||
            el.address.geo.lng.toLowerCase().search(value) == 0
          )
            arr.push(el);
        });
        this.setFilterUsers(arr);
      } else {
        this.setFilterUsers(this.tempArr);
      }
      // this.setFilterUsers(this.getUsersRes);
    },
  },
  mounted(){
    this.tempArr = JSON.parse(JSON.stringify(this.getUsersRes))
  }
};
</script>

<style lang="scss" scoped>
input{
    width: 100%;
    padding: 5px 15px;
    margin: 15px 0;
    border-radius: 13px;
}
</style>
