<template>
  <div>
    <div>
      <h2 style="text-align:center">这是Logo商标生成器生成的部分商标</h2>
    </div>
    <div class="swiper">
      <div class="swiper-content">
        <div class="swiper-item" v-for="item in imgUrl" :key="item.id">
          <img class="logo-imgs" :src="item.src" alt="" />
        </div>
      </div>
      <div class="page">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "../swiperJs/swiper";
export default {
  name: "GenLogo",
  data() {
    return {
      imgUrl: [
        { id: 1, src: require("@/assets/pageImg/logo1.png") },
        { id: 2, src: require("@/assets/pageImg/logo2.png") },
        { id: 3, src: require("@/assets/pageImg/logo3.png") },
        { id: 3, src: require("@/assets/pageImg/logo4.png") },
        { id: 1, src: require("@/assets/pageImg/logo1.png") },
      ],
    };
  },

  methods: {
    swiper() {
      new Swiper({
        content: ".swiper-content",
        swiperItem: ".swiper-item",
        page: ".page",
      });
    },
  },

  mounted() {
    this.swiper();
  },
};
</script>


<style>
.router-link-active {
  display: none;
}
.swiper {
  height: 500px;
  width: 510px;
  position: relative;
  overflow: hidden;
  left: 480px;
  border: 10px solid rgba(149, 205, 85, 0.123);
  /* transform: translate(-50%, 50%); */
  border-radius: 50px;
  box-shadow: 10px 10px 10px rgba(137, 206, 17, 0.543);
}
.swiper-content {
  position: absolute;
  left: 0;
  display: flex;
  /* transition: all .4s; */
}
.swiper-item {
  height: 500px;
  width: 510px;
  text-align: center;
}
img {
  height: 100%;
}
.page {
  position: absolute;
  left: 185px;
  bottom: -5px;
}
span {
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: olivedrab;
  margin: 10px;
  border-radius: 200px;
}
</style>

