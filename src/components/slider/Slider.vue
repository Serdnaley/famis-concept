<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SliderItem from '@/components/slider/SliderItem.vue'

const slides = [0, 1, 2, 3]
</script>

<template>
  <div class="Slider">
    <div class="Slider__bg" />

    <Swiper
      class="Slider__swiper"
      slides-per-view="auto"
      :space-between="30"
      :threshold="10"
      :loop="true"
    >
      <SwiperSlide
        v-for="(_, index) in slides"
        :key="index"
        class="Slider__swiper-item"
      >
        <SliderItem :index="index" :count="10" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
.Slider {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  &__bg {
    position: absolute;
    height: 240px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: radial-gradient(120% 1000% at 40% 10%, #F0F2F4 0%, #DAE3E7 100%);
  }

  &__swiper {
    overflow: visible;
    margin-bottom: 25px;
    margin-left: -20px;

    &-item {
      width: fit-content;
    }
  }
}
</style>
