<template>
  <div class="restaurant--row">
    <h2 class="title">
        Nos restaurants
    </h2>
    <div class="wrapper--card">
    <!-- v-for permet de boucler dans le template -->
    <!-- infos = qu'est ce qu'on veux boucler, cb de fois in3 & la clé de la carte c'est l'index  -->
    <restaurant-card v-for="(card, index) in 3" :key="index"/>
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
    }
}
</script>

<style lang="scss">
.restaurant--row {
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