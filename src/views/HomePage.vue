<template>
  <div>
    home
    <app-form @getResult="getResult1"></app-form>

    <app-photo-list :photo-list="result" />
    <app-modal v-if="show" @close="show = false" />
  </div>
</template>

<script>
import appForm from "@/components/app-form.vue";
import AppModal from "../components/app-modal.vue";
import AppPhotoList from "../components/app-photo-list.vue";

export default {
  components: { appForm, AppModal, AppPhotoList },

  name: "HomePage",

  data() {
    return {
      formData: null,
      show: false,
      result: null,
    };
  },

  methods: {
    getResult1(form) {
      console.log(form);
      // console.log(res)
      this.formData = form;
      this.show = true;
      // this.result = res
    },
  },

  computed: {},

  async created() {
    const res = await this.axios.get('https://jsonplaceholder.typicode.com/photos?albumId=2')
    this.result = res.data
    // await fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     this.result = res;
    //   });
    // console.log(this.result);
  },
};
</script>

<style lang="scss" scoped></style>
