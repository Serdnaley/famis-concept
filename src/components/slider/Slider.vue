<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SliderItem from '@/components/slider/SliderItem.vue'
import gloveImage from '@/assets/equipments/glove.png'
import gunImage from '@/assets/equipments/gun.png'
import helmetImage from '@/assets/equipments/helmet.png'
import turbineImage from '@/assets/equipments/turbine.png'

const cards = [
  {
    id: 0,
    image: gunImage,
    type: 'gun',
    title: 'Super gun',
    model: 'FX-920/13',
    propertyName: 'Power',
  }, {
    id: 1,
    image: helmetImage,
    type: 'helmet',
    title: 'Met helmet',
    model: 'FX-920/13',
    propertyName: 'Def',
  }, {
    id: 2,
    image: gloveImage,
    type: 'glove',
    title: 'Steel gloves',
    model: 'FX-920/13',
    propertyName: 'Agility',
  }, {
    id: 3,
    image: turbineImage,
    type: 'turbine',
    title: 'Bombshell',
    model: 'FTP-29/86',
    propertyName: 'Explosion',
  },
]
</script>

<template>
  <div class="Slider">
    <div class="Slider__bg"/>

    <Swiper
      class="Slider__swiper"
      slides-per-view="auto"
      :space-between="30"
      :threshold="10"
      :loop="true"
    >
      <SwiperSlide
        v-for="card in cards"
        :key="card.id"
        class="Slider__swiper-item"
      >
        <SliderItem :card="card"/>
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
