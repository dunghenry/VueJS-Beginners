<template>
  <div id="app" :class="
    typeof data.main != 'undefined' && data.main.temp > 25 ? 'warm' : ''
  ">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." v-model="query" @keypress="fetchWeather" />
      </div>
      <div class="weather-wrap" v-if="typeof data.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ data.name }}, {{ data.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="image">
          <img v-bind:src="`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`" alt="Icon" />
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(data.main.temp) }}°C</div>
          <div class="weather">{{ data.weather[0].description }}</div>
        </div>
        <div class="additional-section">
          <div class="row">
            <div class="item">
              <label>MT Mọc</label>
              <div class="sunrise">
                {{ moment.unix(data.sys.sunrise).format("H:mm") }}
              </div>
            </div>
            <div class="item">
              <label>MT Lặn</label>
              <div class="sunset">
                {{ moment.unix(data.sys.sunset).format("H:mm") }}
              </div>
            </div>
          </div>
          <div class="row-two">
            <div class="item">
              <label>Độ ẩm</label>
              <div class="humidity">{{ data.main.humidity }}%</div>
            </div>
            <div class="item">
              <label>Gió</label>
              <div class="wind-speed">
                {{ (data.wind.speed * 3.6).toFixed(2) }} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
import moment from "moment";
export default {
  name: "app",
  created: function () {
    this.moment = moment;
  },
  data() {
    return {
      api_key: "a57c68afe09e9e5fbf2cf9544e375750",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      data: {},
    };
  },
  methods: {
    async fetchWeather(e) {
      try {
        if (e.key == "Enter") {
          const response = await axios.get(
            `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang=vi`
          );
          this.setResult(response.data);
          this.query = ""
        }
      } catch (error) {
        createToast(error.response.data.message, {
          type: "danger",
          showIcon: "true",
          hideProgressBar: "false",
          timeout: 3000,
        });
        this.query = "";
      }
    },
    setResult(results) {
      this.data = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ];
      let days = [
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
        "Chủ Nhật",
      ];
      let day = days[d.getDay() - 1];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ngày ${date} tháng ${month} năm ${year}`;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app.warm {
  background-image: url("./assets/warm-bg.jpg");
  background-position: 0.5;
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: black;
  font-size: 20px;
  appearance: none;
  outline: none;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 90px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 15px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  font-style: inherit;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.image {
  width: 150px;
  margin-right: auto;
  margin-left: auto;
}

.image img {
  margin-left: 20px;
  width: 120px;
  height: auto;
}

.row,
.row-two {
  color: #fff;
  margin-top: 20px;
  display: flex;
}

.item {
  width: 50%;
  text-align: center;
}
</style>
