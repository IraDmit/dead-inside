<template>
  <div class="photoList">
    <app-photo-item v-for="(element, i) in photoList" :key="i" :photo-item="element"/>

  </div>
</template>

<script>
import appPhotoItem from './app-photo-item.vue';


export default {
  components: { appPhotoItem },
  props: {
	photoList: {
		type: [Array, Object],
		default: () => [],
	}
  },
};
</script>

<style scoped>

</style>