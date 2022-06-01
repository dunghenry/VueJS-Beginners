<template>
  <di>
    <h1 class="title" v-if="movies.length > 0">List Movie</h1>
  <div
    class="movies-list"
    style="display: flex; flex-wrap: wrap; margin: 0px 8px"
  >
    <div
      class="movie"
      v-for="movie in movies"
      :key="movie.imdbID"
      style="
        width: 75%;
        padding: 25px 8px;
        margin-left: auto;
        margin-right: auto;
        font-weight: bold;
        margin-top: 15 px;
      "
    >
      {{ movie.Title }}
      <router-link
        :to="'/movie/' + movie.imdbID"
        class="movie-link"
        style="display: flex; flex-direction: column; height: 100%"
      >
        <div class="product-image" style="position: relative; display: block">
          <img
            v-bind:src="movie.Poster"
            alt="Movie Poster"
            class="img"
            style="
              display: block;
              width: 100%;
              height: 290px;
              object-fit: cover;
              margin-top: 10px;
            "
          />
          <div
            class="type"
            style="
              position: absolute;
              padding: 8px 16px;
              background-color: #42b883;
              color: #fff;
              bottom: 10px;
              left: 0px;
              text-transform: capitalize;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            "
          >
            {{ movie.Type }}
          </div>
        </div>
        <div
          class="details"
          style="
            background-color: #496583;
            padding: 16px 8px;
            flex: 1 1 100%;
            border-radius: 0px 0px 8px 8px;
          "
        >
          <p class="year" style="color: #aaa; font-size: 14px">
            {{ movie.Year }}
          </p>
          <h4
            style="
              color: #fff;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.5px;
            "
          >
            {{ movie.Title }}
          </h4>
        </div>
      </router-link>
    </div>
  </div>
  </di>
</template>

<script>
import { mapState } from "vuex";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import store from "../store";
export default {
  name: "MovieList",
  computed: mapState(["movies"]),
  setup() {
    const router = useRouter();
    onBeforeMount(() => {
      if (store.state.movies.length === 0) router.push("/");
    });
    return {
      router,
    };
  },
};
</script>

<style>
.title {
  text-align: center !important;
}
</style>
