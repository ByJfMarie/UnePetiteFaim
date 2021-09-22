<template>
  <div class="searchBar">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Rechercher une recette">
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Accueil />
</template>

<script>
import Accueil from "./components/Accueil.vue";

export default {
  name: "App",
  components: {
    Accueil,
  },
};
</script>

<style>
</style>
