<template>
  <router-link to="/">
  <div id="return">Retour à l'accueil</div>
</router-link>
  <div class="restaurant--page">
    <!-- ":" rends le contenu dynamique -->
    <img :src="restaurant.image" alt="">
    <div class="restaurant--page--infos">
       <p>{{ restaurant.name }}</p>
       <p>Note du restaurant: {{ restaurant.note }}</p>
       <p>Temps de livraison: {{ restaurant.drive_time }}</p>
    </div>
 
  </div>
</template>

<script>
import BDD from '../BDD'
import { useRoute } from 'vue-router'

export default {
  name: 'RestaurantView',
  setup() {
    const route = useRoute()

    let restaurant = null

    if (route.params.name) {
      restaurant = BDD.find((restaurant) => restaurant.name === route.params.name)
    } else if (route.params.type) {
      restaurant = BDD.find((restaurant) => restaurant.type === route.params.type)
    }

    return {
      restaurant
    }
  }
}

</script>

<!-- scoped permet de contenir le CSS sur cette page uniquement -->
<style lang="scss" scoped>
#return {
  margin: 25px 45px;
  font-weight: 400;
  cursor: pointer;
  pointer-events: none;
  text-decoration: none!important;
  color: #000;

  &:hover {
    font-size: 30px;
    font-weight: 900;
  }
}
.restaurant--page {
  display: flex;
  img {
    width: 50%;
  }
}
</style>