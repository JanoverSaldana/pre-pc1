<script>


import {DrinksApiService} from "../services/drinks-services.js";
import {Drink} from "../model/drink.entity.js";


export default {
  name: "drink-card",

  data() {
    return {
      drinkList : [],
      drinkService: new DrinksApiService(),
    }
  },

  methods: {

    buildResourcesListFromResponseData(resource) {
      return resource.map(response => new Drink(response));
    }



  },

  created() {

    this.drinkService.getAllResources()
        .then(response => {

          this.drinkList = this.buildResourcesListFromResponseData(response.data.drinks);

          console.log('data-drink:', this.drinkList);
        })
        .catch(error => {
          console.log("Error al consumir la API", error);
        });

  }

}
</script>

<template>

  <div>
    <h1>Cócteles que empiezan con "A"</h1>
    <div class="card-container">
      <!-- Iteramos sobre los cócteles y mostramos una tarjeta para cada uno -->
      <div class="card" v-for="drink in drinkList" :key="drink.idDrink">
        <img :src="drink.strDrinkThumb" alt="drink.strDrink" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-center">{{ drink.strDrink }}</h5>
          <p class="card-text">{{ drink.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>