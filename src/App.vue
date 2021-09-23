/* eslint-disable */

<template>

  <div class="page w-full flex justify-center mt-6 items-center">

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
  <Accueil />
</template>

<script>
import Accueil from "./components/Accueil.vue";
import axios from 'axios'


export default {
  name: "App",
  components: {
    Accueil,

  },
  data() {
    return {
      searchText: "",
    }
  },
  methods: {
    search() {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+this.searchText)
      .then(response =>{
        console.log(response.data.drinks);
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
