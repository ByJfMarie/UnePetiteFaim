/* eslint-disable */
<template>
  <div class="page w-full flex sm:flex-row flex-col justify-center mt-12 items-center">
    <div class="searchBar bg-white w-5/6 sm:w-5/12 md:w-1/3 py-2 px-4 rounded-full shadow-lg sm:mr-4 mr-0 focus-within:shadow-xl focus:outline-none focus:shadow-xl">
      <i class="fas fa-search mr-6"></i>
      <input type="text" placeholder="Rechercher une recette" class="focus:outline-none w-4/5" @keyup.enter="search" v-model="searchText"/>
    </div>
    <div class="boutons sm:mt-0 mt-4 sm:ml-4 ml-0 flex">
      <button class="filterBar bg-white w-28 py-2 px-4 rounded-full shadow-lg flex justify-around items-center focus-within:shadow-xl focus:outline-none focus:shadow-xl" v-on:click="openFilterPage">
        <i class="fas fa-filter"></i>
        <h1 class="focus:outline-none text-gray-400">Filter</h1>
      </button>
      <button class="trieBar bg-white w-28 py-2 px-4 rounded-full shadow-lg flex justify-around items-center ml-4 focus-within:shadow-xl focus:outline-none focus:shadow-xl">
        <i class="fas fa-sort-amount-up"></i>
        <h1 class="focus:outline-none text-gray-400">Trier</h1>
      </button>
      <button class="randomDrink bg-white w-auto py-3 px-3 rounded-full shadow-lg flex justify-around items-center ml-4 focus-within:shadow-xl focus:outline-none focus:shadow-xl" v-on:click="random">
        <i class="fas fa-dice"></i>
      </button>
    </div>
  </div>

  <div class="filtreBlock w-full flex justify-center mt-6" v-if="FilterPage">
    <div class="filterPage bg-white xl:h-64 h-80 xl:w-5/12 lg:w-7/12 w-10/12 rounded-xl shadow-lg relative">
      <button v-on:click="closeFilterPage">
        <i class="fas fa-times absolute top-2 right-4"></i>
      </button>
      <div class="w-full h-full flex -mt-6 flex-col items-center justify-around">
        <div class="searchBar bg-white w-5/6 sm:w-2/3 md:w-2/3 lg:mt-0 mt-6 py-2 pl-4 rounded-full h-10 mr-4 border border-gray-100 shadow-md">
          <i class="far fa-lemon mr-4"></i>
          <input type="text" placeholder="Ingredient (Ex: Lemon juice,Gin,Mint)" class="focus:outline-none w-5/6 bg-white" @keyup.enter="searchFilter" v-model="searchFilterText"/>
        </div>
        <div class="w-full flex flex-col lg:flex-row justify-around items-center">
          <div class="filtreAlccol xl:mb-0 mb-4">
            <label for="toggle" class="text-gray-700">Alcoholic</label>
            <div class="relative inline-block w-12 ml-2 align-middle select-none transition duration-200 ease-in ">
              <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" v-model="alcoholic" />
              <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" ></label>
            </div>
          </div>
          <div class="relative inline-flex xl:mb-0 mb-4" v-if="categories">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
              <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/>
            </svg>
            <select class="border border-gray-100 shadow-md rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white focus:outline-none appearance-none" v-model="categoryFiltre">
              <option>Catégories</option>
              <option v-for="category in categories" :key="category">{{ category.strCategory }}</option>
            </select>
          </div>
          <div class="relative inline-flex xl:mb-0 mb-6">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
              <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/>
            </svg>
            <select class="border border-gray-100 shadow-md rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white focus:outline-none appearance-none" v-model="glassFiltre">
              <option>Verres</option>
              <option v-for="glass in categories.glass" :key="glass">{{ glass.strGlass }}</option>
            </select>
          </div>
        </div>
        <div class="searchButton">
          <button class="bg-red-400 text-white text-xl rounded-full px-8 py-1 shadow" v-on:click="searchFilter">Rechercher</button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center" :class="{ hidden: loading }">
    <div class="flex items-center mt-32 flex-wrap" v-if="results == 'None'">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_cfalsouq.json"  background="transparent"  speed="1"  class="w-48 md:mx-4 mx-auto justify-center"  loop autoplay></lottie-player>
      <h1 class="md:mx-4 mx-auto md:mt-0 mt-2 px-2 md:px-0 text-2xl justify-center">Oops... No result for your search</h1>
    </div>
    <div class="flex justify-around flex-wrap w-full 2sm:w-9/12 mt-14" v-else-if="randomDrink != null && results == null">
      <h1 class="text-center font-bold text-xl">Random drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <foodCard v-for="result in randomDrink" :key="result" :result="result"
        ></foodCard>
      </div>
    </div>
    <div class="flex flex-col w-full 2sm:w-9/12 mt-14" v-else-if="popularDrink != null && results == null">
      <h1 class="text-center font-bold text-xl">Popular drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <foodCard v-for="result in popularDrink" :key="result" :result="result"></foodCard>
      </div>
      <h1 class="text-center font-bold text-xl mt-14">Latest drinks</h1>
      <div class="flex justify-around flex-wrap mt-4">
        <foodCard v-for="result in latestDrink" :key="result" :result="result"></foodCard>
      </div>
    </div>
    <div class="w-full 2sm:w-9/12 mt-14 flex flex-col" v-else>
      <div class="flex justify-around flex-wrap">
        <foodCard v-for="result in currentPageContent" :key="result" :result="result"></foodCard>
      </div>
      <div class="flex justify-around items-center" v-if="totalPages != null"> 
        <button v-on:click="previousPage" class="w-auto text-red-400 text-3xl duration-100 hover:text-red-300" :class="{'cursor-default': !pageMoins}"><i class="fas fa-chevron-left" :class="{'text-gray-400 hover:text-gray-400': !pageMoins}"></i></button>
        <button v-on:click="nextPage" class="w-auto text-red-400 text-3xl duration-100 hover:text-red-300" :class="{'cursor-default': !pagePlus}"><i class="fas fa-chevron-right" :class="{'text-gray-400 hover:text-gray-400': !pagePlus}"></i></button>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center mt-24" :class="{ hidden: !loading }">
    <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="15" color="#f87171"/>
  </div>
</template>

<script>
import axios from "axios";
import foodCard from "../components/foodCard.vue";
import { LoopingRhombusesSpinner } from "epic-spinners";

export default {
  name: "Cocktails",
  components: {
    foodCard,
    LoopingRhombusesSpinner,
  },
  data() {
    return {
      searchText: "",
      results: null,
      FilterPage: false,
      alcoholic: true,
      categories: null,
      categoryFiltre: "Catégories",
      glassFiltre: "Verres",
      filterResults: null,
      loading: false,

      popularDrink: null,
      latestDrink: null,
      randomDrink: null,

      totalPages: null,
      currentPage: null,
      perPage: 8,
      currentPageContent: [],
      pagePlus: true,
      pageMoins: true,
    };
  },
  methods: {
    pagination() {
      if (this.results.length > this.perPage) {
        this.totalPages = Math.ceil(this.results.length / this.perPage);
        this.currentPage = 1;
        this.refreshContent();
        this.pageMoins = false;
      }else {
        this.totalPages = null;
        this.currentPage = null;
        this.currentPageContent = this.results;
      }
    },
    nextPage() {
      this.pageMoins = true;
      
      if (this.currentPage + 1 < this.totalPages) {
        this.currentPage += 1;
        this.refreshContent();
      }
      else if (this.currentPage + 1 == this.totalPages){
        this.pagePlus = false;
        this.currentPage += 1;
        this.refreshContent();
      }
      
    },
    previousPage() {
      this.pagePlus = true;
      if (this.currentPage - 1 > 1) {
        this.currentPage -= 1;
        this.refreshContent();
      }
      else if (this.currentPage - 1 == 1){
        this.currentPage -= 1;
        this.pageMoins = false;
        this.refreshContent();
      }
    },
    refreshContent() {
      this.currentPageContent = []
      let i;
      if (this.currentPage == 1) {
        i = 0
      }
      else {
        i = ((this.currentPage - 1) * this.perPage)
      }
      while ((i < (this.perPage * this.currentPage)) && i < this.results.length) {
        this.currentPageContent.push(this.results[i]);
        i += 1;
      }
    },
    openFilterPage() {
      if (this.FilterPage === false) {
        this.FilterPage = true;
      } else {
        this.FilterPage = false;
      }
    },
    closeFilterPage() {
      this.FilterPage = false;
    },
    search() {
      this.loading = true;
      this.randomDrink = null;
      if (this.searchText == "") {
        this.results = null;
      } else {
        axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + this.searchText).then((response) => {
            if (response.data.drinks == null) {
              this.results = "None";
            } else {
              this.results = response.data.drinks;
              this.pagination();
            }
          });
      }
      this.loading = false;
    },
    async searchFilter() {
      this.FilterPage = false;
      this.loading = true;
      axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=").then((response) => {
          this.results = response.data.drinks;
          let alcoholic = "";
          if (this.alcoholic === true) {
            alcoholic = "Alcoholic";
          } else {
            alcoholic = "Non Alcoholic";
          }

          if (this.categoryFiltre === "Catégories") {
            this.categoryFiltre = "";
          }

          if (this.glassFiltre === "Verres") {
            this.glassFiltre = "";
          }

          this.filterResults = this.results.filter((result) => {
            return (result.strCategory.toLowerCase().includes(this.categoryFiltre.toLowerCase()) && result.strGlass.toLowerCase().includes(this.glassFiltre.toLowerCase()) && (result.strAlcoholic.toLowerCase().includes(alcoholic.toLowerCase()) || result.strAlcoholic === "Optional alcohol"));
          });

          if (this.searchFilterText != "") {
            axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + this.searchFilterText).then((response) => {
                if (response.data.drinks !== "None Found") {
                  let TextResult = [];
                  this.filterResults.forEach((result) => {
                    response.data.drinks.filter((resResult) => {
                      if (resResult.idDrink.toLowerCase() == result.idDrink.toLowerCase()) {
                        TextResult.push(result);
                      }
                    });
                  });
                  this.results = TextResult;
                  this.pagination();
                } else {
                  this.results = "None";
                }
              });
          } else {
            this.results = this.filterResults;
            this.pagination();
          }

          this.loading = false;
        });
    },
    random() {
      this.loading = true;
      axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php").then((response) => {
          this.randomDrink = response.data.drinks.splice(0, 8);
        });
      this.results = null;
      this.loading = false;
    },
  },
  async created() {
    await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list").then((response) => {
        this.categories = response.data.drinks;
      });

    await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list").then((response) => {
        this.categories.glass = response.data.drinks;
      });

    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php").then((response) => {
        this.popularDrink = response.data.drinks.splice(0, 8);
      });

    axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/latest.php").then((response) => {
        this.latestDrink = response.data.drinks.splice(0, 8);
      });
  },
};
</script>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-red-200;
  right: 0;
  border-color: #ffbcbc;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-red-200;
  background-color: #ffbcbc;
}
</style>

<!--
couleurs

gris clair de fond : #f9f9fb

-->
