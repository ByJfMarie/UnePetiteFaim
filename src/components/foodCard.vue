<template lang="fr">
    <div class="food-card-container bg-white h-86 w-80 shadow-sm rounded-2xl mb-4 mt-4 p-4 flex flex-col relative" v-if="recette">
       <div class="header flex items-center mb-3">
         <img :src="recette.strDrinkThumb" alt="" class=" h-16 rounded-full">
         <span class="title ml-2">{{recette.strDrink}}<br><span class="text-xs text-gray-400">{{recette.strCategory}}</span></span>
       </div>
       <h1 class="font-semibold">Ingrédients</h1>
       <div class="w-full flex justify-center">

         <div class="ingredients-container flex flex-wrap items-center mt-2 mb-4 justify-start  w-full px-2">
           <div class="" v-for="ingredient in ingredients" :key="ingredient">
              <IngredientCard :name="ingredient.name" :photo="ingredient.photo" :last="ingredient.last" :more="ingredient.more"/>
           </div>
          </div>
        </div>
       <div class="footer absolute bottom-4" >
           <button class="rounded-full pt-1 pb-1 pl-5 pr-5 bg-red-400 text-white hover:bg-red-300">Voir la recette</button>
       </div>
       <div class="footer absolute bottom-5 right-4" >
        <span class="text-xs text-gray-400"><i class="fas fa-glass-martini-alt"></i> {{recette.strAlcoholic}}</span>
       </div>
       
       
    </div>

</template>
<script>
import IngredientCard from './IngredientCard.vue';
import axios from 'axios';
  
export default {
  name: "FoodCard",
  props: {
    result: null,
    
  },
  data() {
    return {
      test: "\uD83C\uDF45",
      recette: null,
      ingredients: [],
    };
  },
  created() {
    console.log(this.result.idDrink);
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.result.idDrink)
    .then(response =>{
      console.log(response.data);
      this.recette = response.data.drinks[0];
      for (let i = 1; i <= 15; i++) {
        if (this.recette['strIngredient'+i] === "" || this.recette['strIngredient'+i] === null) {
          break;
        }
        let ingredient = {}
        if (this.recette['strIngredient'+i].length > 10) {
          ingredient.name = this.recette['strIngredient'+i].slice(0,8)+"...";
        }else {
          ingredient.name = this.recette['strIngredient'+i];
        }
        ingredient.measure = this.recette['strMeasure'+i];
        ingredient.photo = 'https://www.thecocktaildb.com/images/ingredients/'+this.recette['strIngredient'+i]+'-Small.png';
        ingredient.last = false;
        ingredient.more = null;

        this.ingredients.push(ingredient);        

      }
      if (this.ingredients.length > 6) {
        let more = this.ingredients.length - 5;
        this.ingredients = this.ingredients.splice(0, 6);
        this.ingredients[5].last = true;
        this.ingredients[5].more = more;
      }
      console.log(this.ingredients);
    })
  },
  components: {
    IngredientCard,
  },
};
</script>
<style lang="css">
</style>