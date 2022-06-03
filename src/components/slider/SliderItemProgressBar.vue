<script setup>
import { defineProps } from 'vue'
import { useRandomizerAnimation } from '@/services/useRandomizerAnimation'

defineProps({
  text: String,
})

const progress = useRandomizerAnimation({
  min: 1,
  max: 100,
  durationMin: 5000,
  durationMax: 10000,
})

const maskId1 = `SliderItemProgressBar__mask-${Math.random()}-1`
const maskId2 = `SliderItemProgressBar__mask-${Math.random()}-2`
</script>

<template>
  <div class="SliderItemProgressBar">
    <div class="SliderItemProgressBar__title">
      <div class="SliderItemProgressBar__title-text">{{ text }}</div>
      <div class="SliderItemProgressBar__title-number">({{ Math.round(progress) }})</div>
    </div>

    <svg width="252" height="45" viewBox="0 0 252 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 15C0 6.71573 6.71573 0 15 0H235.005C242.63 0 247.449 8.19112 243.746 14.8564L231.286 37.2846C228.641 42.0466 223.621 45 218.174 45H5C2.23857 45 0 42.7614 0 40V16.5V15Z" fill="url(#paint0_linear_51_4099)" fill-opacity="0.25"/>
      <path d="M15 0.5H235.005C242.248 0.5 246.827 8.28156 243.309 14.6136L230.849 37.0418C228.292 41.6451 223.44 44.5 218.174 44.5H5C2.51472 44.5 0.5 42.4853 0.5 40V16.5V15C0.5 6.99187 6.99187 0.5 15 0.5Z" stroke="url(#paint1_linear_51_4099)" stroke-opacity="0.5"/>
      <path d="M23 23C23 20.2386 25.2386 18 28 18H215.024C217.284 18 218.732 20.4024 217.678 22.4003L211.907 33.3338C211.042 34.9737 209.34 36 207.485 36H28C25.2386 36 23 33.7614 23 31V23Z" fill="white"/>
      <mask :id="maskId1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="26" y="21" width="187" height="12">
        <mask :id="maskId2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="26" y="21" width="187" height="12">
          <path d="M26 23C26 21.8954 26.8954 21 28 21H211.942C212.67 21 213.154 21.7543 212.851 22.4167L208.535 31.8333C208.209 32.5442 207.499 33 206.717 33H28C26.8954 33 26 32.1046 26 31V23Z" fill="white"/>
        </mask>
        <g :mask="`url(#${maskId2})`">
          <rect
            v-for="i in Math.round(progress / 100 * 27)"
            :key="i"
            :x="21 + i * 7" y="16"
            width="5" height="20"
            :transform="`rotate(25 ${(21 + i * 7)} 16)`"
            fill="black"
          />
        </g>
      </mask>
      <g :mask="`url(#${maskId1})`">
        <rect x="26" y="21" width="188" height="12" fill="#EB6E15"/>
        <rect x="26" y="21" width="188" height="12" fill="url(#paint2_linear_51_4099)" fill-opacity="0.25"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_51_4099" x1="-7.06189" y1="23.0232" x2="299.219" y2="4.36909" gradientUnits="userSpaceOnUse">
          <stop offset="0.0563165" stop-color="#EB6E15"/>
          <stop offset="1" stop-color="#F2F508"/>
        </linearGradient>
        <linearGradient id="paint1_linear_51_4099" x1="440.662" y1="-144.419" x2="2.63782" y2="13.0499" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#EB6E15"/>
          <stop offset="0.698462" stop-color="#EB6E15" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_51_4099" x1="17.2902" y1="27.1395" x2="368.572" y2="-71.814" gradientUnits="userSpaceOnUse">
          <stop offset="0.0563165" stop-color="#EB6E15"/>
          <stop offset="0.385417" stop-color="#F2F508"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss">
.SliderItemProgressBar {
  position: relative;
  width: fit-content;
  z-index: 0;

  &__title {
    font-family: 'Ethnocentric', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    background: white;
    display: flex;
    gap: 5px;
    padding: 5px 8px;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 15px;
    transform: translateY(-50%);

    &-text {
      background: linear-gradient(90deg, #EB6E15 -7%, #EBAE15 150%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    &-number {
      color: rgba(#00202D, .5);
    }
  }
}
</style>
