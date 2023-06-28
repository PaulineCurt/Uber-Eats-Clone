<!-- .vue fichier créer pas l'ide  -->
<!-- html -->
<template>
  <div  class="restaurant--card">
    <div :style="changeBackground" class="restaurant--image">
    </div>
    <div class="restaurant--informations">
      <div class="top">
        <p class="name">
          {{ info_restaurant.name}}
        </p>
        <p class="note">
          <span>
            {{ info_restaurant.note}}
          </span>
        </p>
      </div>
      <p class="time">
        {{ info_restaurant.drive_time}}
      </p>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
// import
import { computed } from 'vue';
export default {
  name: "RestaurantCard",
  props: {
    info_restaurant: Object,
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image})`
      }
    })
    //return
    return {
      changeBackground
    }
  }
}
</script>

<!-- CSS -->
<style lang="scss">
.restaurant--card {
    width: 100%;
    height: 30vh;
    p {
      margin: 0px;
    }
    .restaurant--image {
      background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
      height: 70%;
      background-size: cover;
      background-position: center;  
    }

    .restaurant--informations {
      .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
        .note {
          background-color: #eee;
          height: 30px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          border-radius: 50%;
        }
      }
      .time, .price {
        font-size: 0.9rem;
      }
    }
     
  }


</style>