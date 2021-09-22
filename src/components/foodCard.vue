<template lang="fr">
    <div class="food-card-container bg-white h-auto w-64 shadow-sm rounded-2xl ml-2 mt-2 p-4 flex flex-col">
       <div class="header flex items-center mb-3">
         <div class="img h-16 w-16 bg-red-600 rounded-full"></div>
         <span class="title ml-2">Le titre ici</span>
       </div>
       <h1>Ingrédients</h1>
       <div class="ingredients-container flex flex-wrap w-full justify-center items-center mt-2 mb-2">
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
       </div>
       <div class="footer flex justify-between items-center">
        <button class="rounded-full pt-1 pb-1 pl-5 pr-5 bg-green-400 text-white">Voir la recette</button>
        <span class="text-xs">15 mins</span>
       </div>
       
    </div>

</template>
<script>
import IngredientCard from './IngredientCard.vue';
  
export default {
  name: "FoodCard",
  props: {},
  data() {
    return {};
  },
  components: {
    IngredientCard,
  },
};
</script>
<style lang="css">
</style>