<template>
  <div class="home">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
      <div class="wrapper--input">
     <!-- V-model permet de lier la valeur de ce que l'utilisateur 
      inscrit dans l'input, grace à la variable "search_restaurant" -->
      <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez vous envie?">
        <div class="search">
          <!-- link to path -->
          <router-link to="/restaurant">
            <div v-for="(restaurant, i) in search_restaurant" :key="i" class="container--restaurant--search">
            <div class="wrapper--img">
              <img :src="restaurant.image" alt="">
            </div>
            <p>{{ restaurant.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
// IMPORT
import BDD from '../BDD.js'
import { onMounted, ref, watch } from 'vue'
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
      // ref => rend la variable imutable (qd elle change toutes les variables liées change avec)
      // qd la valeur change tout ce qui est liée change !
      let data_restaurant = ref([]);
      let all_restaurant = [];

      const makeDataRestaurant = () => { 
        let three_restaurant = []

        // boucle sur la BDD
        for(const restaurant of BDD) {
          // Sur chaque objet on crée un nouveau restaurant avec toutes les propriétés
          const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
          // Tableau qui récupère tous les restaurants
          all_restaurant.push(new_restaurant);
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

      //User search restaurant 
      // ref => immutable / dynamique
      let user_search_restaurant = ref('');
      let search_restaurant = ref([]);
      // Dés qu'une valeur d'une ref change on lance une fonction
      // 1er param => user_search_restaurant <= la variable à "regarder" (watch)
      // 2eme param => fonction param => new_value
      watch(user_search_restaurant, (new_value) => {
        // créer un regex (loi de comparasion de chaine de caractère)
        // loi de comparaison => new_value
        // i pour la casse de la string 
        let regex = RegExp(new_value, "i");
        

        // test les chaines de caractères
        // test => permet de tester la regex
        // on passe le nom des restaurants en chaine de caractères à tester
        //toLowerCase min ou maj 
        let new_search_restaurant= all_restaurant.filter(restaurant => regex.test(restaurant.name));

        // Si new_value == 0 true "?" renvoie tableau vide
        // sinon ":" renvoi tableau plein
        new_value == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant;
  
      })
      //
      onMounted(makeDataRestaurant);

      // Retourne le tableau data_restaurant dans le setup
      return {
        data_restaurant,
        user_search_restaurant,
        search_restaurant
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

    .wrapper--input {
      position: relative;
        input {
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
      }
      .search {
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: #fff;

        .container--restaurant--search {
          display: flex;
          align-items: center;
          padding: 10px;

          &:hover {
            background-color: #f6f6f6;
          }

          .wrapper--img {
            height: 60px;
            width: 60px;
            margin-right: 25px;
            border-radius: 50%;
            overflow: hidden;
          }
          img {
            height: 100%;
            width: auto;
          }
        }
      }
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