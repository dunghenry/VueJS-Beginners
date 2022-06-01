<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <p class="content">{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import {apikey} from './Home.vue';
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${route.params.id}&plot=full`)
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        })
    })
    return {
      movie,
    }
  }
}
</script>

<style lang="scss">
.movie-detail {
  padding: 16px;

  h2 {
    text-align: center;
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .featured-img {
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    padding-bottom: 10px;
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
    text-align: center
  }

  .content {
    text-align: justify;
  }
}
</style>