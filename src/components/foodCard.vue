<template lang="fr">
    <div v-bind:class="{'pb-16 h-auto md:min-w-tst md:mx-50% md:order-first': clicked}" class="food-card-container bg-white h-86 w-80 shadow-sm rounded-2xl my-4 p-4 flex flex-col relative" v-if="recette">
       <div class="header flex items-center mb-3">
         <img :src="recette.strDrinkThumb" alt="" class=" h-16 rounded-full">
         <span class="title ml-2">{{recette.strDrink}}<br><span class="text-xs text-gray-400">{{recette.strCategory}}</span></span>
       </div>
       <h1 class="font-semibold">Ingrédients</h1>
       <div class="w-full flex justify-start">

         <div v-if="clicked == false" class="ingredients-container flex flex-wrap items-center mt-2 mb-4 justify-start  w-full px-2">
           <div class="" v-for="ingredient in ingredients" :key="ingredient">
              <IngredientCard :name="ingredient.name" :photo="ingredient.photo" :last="ingredient.last" :more="ingredient.more"/>
           </div>
          </div>
          <div v-else class="">

            <div class="ingredients-container flex flex-wrap items-center mt-2 mb-4 justify-start  w-full px-2">
              <div class="" v-for="ingredient in ingredientsFull" :key="ingredient">
                <IngredientCard :name="ingredient.fullName" :photo="ingredient.photo" :measure="ingredient.measure" :clicked="clicked"/>
              </div>
            </div>
            <div class="flex flex-col w-auto mt-8 px-8 text-gray-600">
              <div class="flex items-center w-full my-4" v-for="step in steps" :key="step">
                <div class="flex min-w-10 min-h-10 rounded-full bg-red-400 justify-center items-center mr-6">
                  <span class="text-white text-2xl">{{steps.indexOf(step)+1}}</span>
                </div>
                <span class="border-b border-red-400 py-4 pr-2 w-full">{{step}}</span>
              </div>
            </div>
          </div>
        </div>
       <div class="footer absolute bottom-4" >
           <button v-if="clicked == false" v-on:click="showReceipe" class="rounded-full pt-1 pb-1 pl-5 pr-5 bg-red-400 text-white hover:bg-red-300 focus:bg-red-300 focus:outline-none duration-100">Voir la recette</button>
           <button v-else v-on:click="showReceipe" class="rounded-full pt-1 pb-1 pl-5 pr-5 bg-red-400 text-white hover:bg-red-300 focus:bg-red-300 focus:outline-none duration-100">Réduire la recette</button>
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
      recette: null,
      ingredients: [],
      ingredientsFull: [],
      steps: [],
      clicked: false,
    };
  },
  created() {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i='+this.result.idDrink)
    .then(response =>{
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
        ingredient.fullName = this.recette['strIngredient'+i];

        this.ingredientsFull.push(ingredient);
        this.ingredients.push(ingredient);        

      }
      if (this.ingredients.length > 6) {
        let more = this.ingredients.length - 5;
        this.ingredients = this.ingredients.splice(0, 6);
        this.ingredients[5].last = true;
        this.ingredients[5].more = more;
      }
      let stepsText = "";
      stepsText = this.recette.strInstructions.replace(/\r/g, '');
      stepsText = stepsText.replace(/\n/g, '');
      this.steps =  stepsText.split('.');
      if (this.steps[this.steps.length-1] === "") {
        this.steps.pop();
      }
      for (let i = 0; i < this.steps.length; i++) {
        this.steps[i] = this.steps[i].trim();
        
      }

    })
  },
  components: {
    IngredientCard,
  },
  methods: {
    showReceipe() {
      if (this.clicked == false) {
        this.clicked = true;
      }else {
        this.clicked = false;
      }
      
    },
  },
};
</script>
<style lang="css">
</style>