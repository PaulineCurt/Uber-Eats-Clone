<template>
  <div class="home">
    <RestaurantRow/>
  </div>
</template>

<script>
// IMPORT
// import BDD from '../BDD.js'
// COMPONENTS
import RestaurantRow from '../components/RestaurantRow'

export default {
    name: "HomeView",
    components: {
      RestaurantRow
    }, 
    // gère le js
    setup(){
      // instancie 
      class Restaurant {
        // infos dont on à besoin
        constructor (name, note, image, drive_time) {
          //déclare les arguments
          this.name = name
          this.note = note
          this.image = image
          this.drive_time = drive_time
        }
      }
      let resto = new Restaurant ('BK', 4.5, 'img', '45min')
      console.log(resto)

    }
}
</script>

<style>

</style>