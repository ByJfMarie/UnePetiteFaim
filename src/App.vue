
<template>
  <div class="page w-full flex sm:flex-row flex-col justify-center mt-12 items-center">

    <div class="searchBar bg-white w-5/6 sm:w-2/3 md:w-1/3 py-2 px-4 rounded-full  shadow-lg mr-4">
      <i class="fas fa-search mr-6"></i>
      <input type="text" placeholder="Rechercher une recette" class="focus:outline-none w-4/6 sm:w-5/6" @keyup.enter="search" v-model="searchText" >
    </div>
    <div class="boutons sm:mt-0 mt-4 ml-4 flex">
    <button class="filterBar bg-white w-28 py-2 px-4 rounded-full  shadow-lg flex justify-around items-center " v-on:click="openFilterPage">
      <i class="fas fa-filter"></i>
      <h1 class="focus:outline-none text-gray-400">Filter</h1>
    </button>
    <button class="trieBar bg-white w-28 py-2 px-4 rounded-full  shadow-lg flex justify-around items-center ml-4">
      <i class="fas fa-sort-amount-up"></i>
      <h1 class="focus:outline-none text-gray-400">Trier</h1>
    </button>

    </div>
  </div>
  
  <div class="filtreBlock w-full flex justify-center mt-6" v-if="FilterPage">
    <div class="filterPage bg-white h-64 w-5/12 rounded-xl shadow-lg relative">
      <button v-on:click="closeFilterPage"><i class="fas fa-times absolute top-2 right-4"></i></button>
    </div>
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
      FilterPage: false,
    }
  },
  methods: {
    openFilterPage() {
      this.FilterPage = true,
      console.log(this.FilterPage);
    },
    closeFilterPage() {
      this.FilterPage = false
    },
    search() {
      axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + this.searchText)
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
