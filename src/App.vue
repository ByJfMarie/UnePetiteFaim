
<template>
  <div class="page w-full flex sm:flex-row flex-col justify-center mt-12 items-center">

    <div class="searchBar bg-white w-5/6 sm:w-2/3 md:w-1/3 py-2 px-4 rounded-full  shadow-lg mr-4 focus-within:shadow-xl focus:outline-none focus:shadow-xl">
      <i class="fas fa-search mr-6"></i>
      <input type="text" placeholder="Rechercher une recette" class="focus:outline-none w-4/6 sm:w-5/6" @keyup.enter="search" v-model="searchText" >
    </div>
    <div class="boutons sm:mt-0 mt-4 ml-4 flex">
    <button class="filterBar bg-white w-28 py-2 px-4 rounded-full  shadow-lg flex justify-around items-center focus-within:shadow-xl focus:outline-none focus:shadow-xl" v-on:click="openFilterPage">
      <i class="fas fa-filter"></i>
      <h1 class="focus:outline-none text-gray-400">Filter</h1>
    </button>
    <button class="trieBar bg-white w-28 py-2 px-4 rounded-full  shadow-lg flex justify-around items-center ml-4 focus-within:shadow-xl focus:outline-none focus:shadow-xl">
      <i class="fas fa-sort-amount-up"></i>
      <h1 class="focus:outline-none text-gray-400">Trier</h1>
    </button>
    <button class="randomDrink bg-white w-auto py-3 px-3 rounded-full  shadow-lg flex justify-around items-center ml-4 focus-within:shadow-xl focus:outline-none focus:shadow-xl" v-on:click="random">
      <i class="fas fa-dice"></i>
    </button>

    </div>
  </div>
  
  <div class="filtreBlock w-full flex justify-center mt-6" v-if="FilterPage">
    <div class="filterPage bg-white h-64 w-5/12 rounded-xl shadow-lg relative">
      <button v-on:click="closeFilterPage"><i class="fas fa-times absolute top-2 right-4"></i></button>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="flex justify-around flex-wrap w-9/12 mt-14" v-if="randomDrink != null">
      <h1 class="text-center font-bold text-xl">Random drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <div class="" v-for="result in randomDrink" :key="result">
          <foodCard :result="result"></foodCard>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-9/12 mt-14" v-else-if="popularDrink != null && results == null">
      <h1 class="text-center font-bold text-xl">Popular drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <div class="" v-for="result in popularDrink" :key="result">
          <foodCard :result="result"></foodCard>
        </div>
      </div>
      <h1 class="text-center font-bold text-xl mt-14">Latest drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <div class="" v-for="result in latestDrink" :key="result">
          <foodCard :result="result"></foodCard>
        </div>
      </div>
    </div>
    
    <div class="flex justify-around flex-wrap w-9/12 mt-14" v-else>
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
      popularDrink: null,
      latestDrink: null,
      randomDrink: null,
    }
  },
  methods: {
    openFilterPage() {
      if (this.FilterPage === false) {
        this.FilterPage = true;
      }else {
        this.FilterPage = false;
      }
      
    },
    closeFilterPage() {
      this.FilterPage = false
    },
    search() {
      this.randomDrink = null;
      if (this.searchText == ""){
        this.results = null;
      }else {
        axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + this.searchText)
          .then(response =>{
          this.results = response.data.drinks;
        })
      }
      
    },
    random() {
      axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
      .then(response =>{
        this.randomDrink = response.data.drinks.splice(0, 8);
      })
    }

  },
  created() {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
      .then(response =>{
        this.popularDrink = response.data.drinks.splice(0, 8);
      })
    
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
    .then(response =>{
      this.latestDrink = response.data.drinks.splice(0, 8);
    })
  }
};
</script>

<style>
</style>

<!--
couleurs

gris clair de fond : #f9f9fb

-->
