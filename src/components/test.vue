<template>
  <div id="app">

<app-form></app-form>

    <!-- 
  // v-html вставка html
  // v-on addEventListener
  // v-bind 
  // v-if условия для отрисовки
  // v-show условия для отрисовки
  // v-for перебор массива
  // v-model  -->

    <!-- <div v-text="'asdasdasd'"></div> -->

    <!-- document.qeurySelector('button').addEventListener('click', (event) =>  event.target.value -->

    

<!-- 
    <button @click="test(name)">я вызываю метод тест</button>
    <input type="text" name="" id="" v-model="valueInput" />
    <p>{{ valueInput }}</p>
    <div class="">
      <input type="text" v-model="name" :placeholder="namePlaceholder" />
      <input
        type="text"
        v-model="lastName"
        :placeholder="nameLastPlaceholder"
      />
      <app-test/>
      <input type="checkbox" id="" v-model="check">
      <input type="text" v-model="email" :placeholder="emailPlaceholder" />
      <input type="text" v-model="phone" :placeholder="phonePlaceholder" />
      <button @click="sendForm()">button</button>
    </div>
    <span style="color: red" v-if="errors">error: {{ errors }}</span> -->
    <!-- {{ result }} -->

    <!-- result.forEach(el => {
    const li = document.createElement('li')
    li.innerHTML = `
      <h2>el.title</h2>
      <p>el.description</p>
      <img src="el.image"/> 
    `
    document.qeurySelector('ul').append(li)
  }) -->
<!-- 
  <div v-if="!errors"> v-if </div>

  <div v-show="!errors"> v-show </div>


  <div v-html="label"></div>


    <ul v-if="result">
      <li v-for="el in result" :key="el.id">
        `еллемент: ${el}`
        еллемент: {{ el }} буков больше неть
        дискорд отменил буковы
        
        есть
        <h2>{{ el.name }}</h2>
        <p>{{ el.address.city }}</p>
        <img src="el.image" />
        <img src="`${el.image}`" />
        
         -->
        <!-- <img :src="el.thumbnailUrl" />
        <p>{{ el.thumbnailUrl }}</p>
      </li>
    </ul> -->


    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <input type="text" />
    <p></p> -->
  </div>
</template>

<script>
import appForm from './components/app-form.vue';
// import appTest from './components/app-test.vue';
// function s () {

//   let val = 0

//   return: {
//     getVal(){
//       return val
//     }
//     setVal(s) {
//       val + s
//     }
//   }

// const a = s()

// f s (){
//   return 123
// }

// }

export default {
  components: { appForm },
  // components: { appTest },
  name: "HomePage",

  data() {
    return {
      check: false,
      result: null,
      name: null,
      namePlaceholder: "name",
      secondName: "zaika",
      message: "123",
      valueInput: null,
      email: null,
      emailPlaceholder: "email",
      phone: null,
      phonePlaceholder: "phone",
      lastName: null,
      nameLastPlaceholder: "last name",
      errors: null,
      label: '<p>hello</p>'
    };
  },

  methods: {
    test(name) {
      alert(name);
    },
    setValue(value) {
      this.valueInput = value;
    },
    sendForm() {
      if (this.fullName) {
        alert(
          `name: ${this.fullName}, email ${this.email}, phone ${this.phone}`
        );
      } else {
        this.errors = `not Valid`;
      }
    },
  },

  computed: {
    fullName() {
      // проверять если у нас name и lastName заполненны
      if (this.name && this.lastName) {
        return this.name + " " + this.lastName; //ira Zaika - ne praVda
      } else {
        return false;
      }
    },
  },

  created() {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.result = res;
      });
  },
};
</script>

<style>
</style>
