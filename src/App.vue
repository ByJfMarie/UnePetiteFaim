
<template>
  <div class="page w-full flex justify-center mt-12 items-center">

    <div class="searchBar bg-white w-1/3 py-2 px-4 rounded-full  shadow-lg mr-4">
      <i class="fas fa-search mr-6"></i>
      <input type="text" placeholder="Rechercher une recette" class="focus:outline-none w-5/6" @keyup.enter="search" v-model="searchText" >
    </div>
    <button class="filterBar bg-white w-28 py-2 px-4 rounded-full  shadow-lg flex justify-around items-center ml-4">
      <i class="fas fa-filter"></i>
      <h1 class="focus:outline-none text-gray-400">Filter</h1>
    </button>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="w-full flex justify-center mt-16">

    <div class="flex justify-around flex-wrap w-9/12">
      
      <div class="" v-for="result in results" :key="result">
        <foodCard :result="result"></foodCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import foodCard from './components/foodCard.vue'


export default {
  name: "App",
  components: {
    foodCard
  },
  data() {
    return {
      searchText: "",
      results: null,
    }
  },
  methods: {
    search() {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(response =>{
        this.results = response.data.drinks;
      })
    },

  },
};
</script>

<style>
</style>

<!--
couleurs

gris clair de fond : #f9f9fb

-->
