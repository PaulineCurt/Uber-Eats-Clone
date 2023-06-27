<template>
  <div class="home">
    <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
// IMPORT
import BDD from '../BDD.js'
import { onMounted, ref } from 'vue'
// COMPONENTS
import RestaurantRow from '../components/RestaurantRow'

export default {
    name: "HomeView",
    components: {
      RestaurantRow
    }, 
    // gère le js
    setup(){
      class Restaurant {
        constructor (name, note, image, drive_time) {
          //déclare les arguments
          this.name = name
          this.note = note
          this.image = image
          this.drive_time = drive_time
        }
      }
      
      let data_restaurant = ref([]);

      const makeDataRestaurant = () => { 
        let three_restaurant = []

        // boucle sur la BDD
        for(const restaurant of BDD) {
          // Sur chaque objet on crée un nouveau restaurant avec toutes les propriétés
          const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)


         if(three_restaurant.length == 2) {
          // a chaque tour de boucle on push dans le tableau three_restaurant
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
         } else {
          three_restaurant.push(new_restaurant);
         }
        }
      }
      onMounted(makeDataRestaurant);

      // Retourne le tableau data_restaurant dans le setup
      return {
        data_restaurant,
      }
    },
}
</script>

<style>

</style>