<template>
  <div class="restaurant--row">
    <h2 class="title">Nos restaurants</h2>
    <div class="wrapper--card">
    <router-link class="restaurant--wrapper"  v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name: 'Restaurant', params: {name: restaurant.name }}">
    <!-- v-for permet de boucler dans le template -->
    <!-- infos = qu'est ce qu'on veux boucler, cb de fois in3 & la clé de la carte c'est l'index  -->
    <restaurant-card :info_restaurant="restaurant" />
     </router-link>
    </div>
  </div>
</template>

<script>
// importe la vue de restaurantCard
import RestaurantCard from './RestaurantCard.vue'

export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
    }, 
    props: {
        three_restaurant: Array
    }
}
</script>

<style lang="scss">
.restaurant--row {
    margin: 55px 0 55px 0px;
    
    .restaurant--wrapper{
        width: 32%;
        text-decoration: none!important;
    }
    .title {
        font-size: 2rem;
    }
    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    } 
}
</style>