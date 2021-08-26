<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
      <button v-for="picture in this.$store.state.apodList.slice(1)" v-bind:key="picture.id" type="button" data-bs-target="#myCarousel" v-bind:data-bs-slide-to="picture.id-1"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img v-bind:src="this.$store.state.apodList[0].hdurl" class="d-block w-100" 
        v-bind:alt="this.$store.state.apodList[0].title">
        <div class="carousel-caption d-none d-md-block">
          <p> 
            <a v-bind:href="this.$store.state.apodList[0].hdurl">
            {{ this.$store.state.apodList[0].title }} 
            </a> 
          </p>
        </div>
      </div>
      <div v-for="picture in this.$store.state.apodList.slice(1)" v-bind:key="picture.id" class="carousel-item">
        <img v-bind:src="picture.hdurl" class="d-block w-100" v-bind:alt="picture.title">
        <div class="carousel-caption d-none d-md-block">
          <p> 
            <a v-bind:href="picture.hdurl">
            {{ picture.title }} 
            </a>  
          </p>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  computed: {
    ...mapState(['apodList'])
  },
  created() {
    this.$store.dispatch('fetchApod');
  },
}
</script>

<style>
  img {
    vertical-align: middle;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    color: #ffffff;
  }
</style>