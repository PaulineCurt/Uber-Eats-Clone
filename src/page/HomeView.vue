<template>
  <div class="home">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
      <input type="text" placeholder="De quoi avez vous envie?">
    </div>
    <div class="banner"></div>
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

<style lang="scss">
.home {
  .header {
    display: flex;
    height: 101px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }
    input {
      background-color: #f6f6f6;
      border: none;
      height: 60px;
      width: 400px;
      outline: none;
      padding-left: 20px;
    }
  }
  .banner {
    height: 200px;
    width: 100%;
    background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/37d1c792897985.5e584e035a037.png') ;
    background-size: cover;
    background-position: center;
  }
}

</style>