<template>
  <div class="item">
    <span>{{ product.order }}</span>
    <h2>{{ product.title }}</h2>
    <h3 v-if="product.dopInfo">{{ product.dopInfo }}</h3>
    <p>{{ product.description }}</p>
    <div class="prices">
      <p class="oldPrice" v-if="sortPrice.oldPrice">{{ sortPrice.oldPrice }}</p>
      <p class="newPrice">{{ sortPrice.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    sortPrice() {
      if(!this.product.option){
        return {
          price: this.product.price 
        }
      } else {
        let min =  this.product.option[0];
        this.product.option.forEach(element => {
          if(element.price < min.price) min=element
        });
        return min
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: calc(50% - 20px);
  height: 200px;
  background-color: #f4f4f4;
  border: #000 2px solid;
  color: #000;
}
.oldPrice{
  text-decoration: line-through;
}
</style>