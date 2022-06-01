<template>
  <div>
    <Header />
    <div class="home">
      <div class="feature-card">
        <router-link to="/movie/tt0409591">
          <img src="../assets/img.jpg" alt="Naruto Poster" class="feature-img" />
          <div class="detail">
            <h3>Naruto</h3>
            <p>
              Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
              searches for recognition and dreams of becoming the Hokage, the
              village's leader and strongest ninja.
            </p>
          </div>
        </router-link>
      </div>
      <form @submit.prevent="SearchMovies" class="search-box">
        <input type="text" placeholder="What are you looking for?" v-model="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store";
export const apikey = "96913db2"
import axios from "axios";
export default {
  components: { Header },
  setup() {
    const search = ref("");
    const router = useRouter();
    const SearchMovies = async () => {
      if (search.value != "") {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${apikey}&s=${search.value}`
        );
        if (res.data.Search) {
          store.commit("GET_MOVIES", res.data.Search);
          router.push("/movies")
        }
        search.value = "";
      }
    };
    return {
      search,
      router,
      SearchMovies,
    };
  },
};
</script>
<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .feature-img {
      width: 100%;
      display: block;
      height: 450px;
      object-fit: fill;
      position: relative;
      z-index: 0;
    }
  }

  .detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 16px;
    z-index: 1;
  }

  h3 {
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    color: #ffffff;
  }
}

.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    &[type="text"] {
      width: 100%;
      color: #fff;
      background-color: #496583;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;

      &::placeholder {
        color: #f3f3f3;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }

    &[type="submit"] {
      width: 100%;
      max-width: 300px;
      background-color: #42b883;
      padding: 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;

      &:active {
        background-color: #3b8070;
      }
    }
  }
}
</style>
