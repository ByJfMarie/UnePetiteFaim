<template lang="fr">
    <div class="food-card-container bg-white h-auto w-80 shadow-sm rounded-2xl ml-2 mt-2 p-4 flex flex-col">
       <div class="header flex items-center mb-3">
         <img src="https://img.cuisineaz.com/660x660/2018/03/19/i137518-lasagnes-italiennes-d-anne-therese.jpeg" alt="" class=" h-16 rounded-full">
         <span class="title ml-2">Lasagnes</span>
       </div>
       <h1>Ingrédients</h1>
       <div class="w-full flex justify-center">

         <div class="ingredients-container flex flex-wrap items-center mt-2 mb-4 justify-start  w-full px-2">
           <IngredientCard name="Tomate" :emoji="test"/>
           <IngredientCard name="Tomate" :emoji="test"/>
           <IngredientCard name="Tomate" :emoji="test"/>
           <IngredientCard name="Tomate" :emoji="test"/>
           <IngredientCard name="Tomate" :emoji="test"/>
           <IngredientCard last="true"/>
          </div>
        </div>
       <div class="footer flex justify-between items-center">
        <button class="rounded-full pt-1 pb-1 pl-5 pr-5 bg-red-400 text-white hover:bg-red-300">Voir la recette</button>
        <span class="text-xs text-gray-400"><i class="fas fa-clock"></i> 15 mins</span>
       </div>
       
    </div>

</template>
<script>
import IngredientCard from './IngredientCard.vue';
  
export default {
  name: "FoodCard",
  props: {},
  data() {
    return {
      test: "\uD83C\uDF45"
    };
  },
  components: {
    IngredientCard,
  },
};
</script>
<style lang="css">
</style>