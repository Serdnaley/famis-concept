<script setup>
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { random } from 'lodash-es'
import { onUnmounted, ref, watch } from 'vue'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const ease = CustomEase.create("custom", "M0,0 C0.3,0 0.4,0.3 0.5,0.5 0.6,0.7 0.7,1 1,1")

const pointsPosition = ref(0)
const pointsPositionTween = ref(0)
let updatePointsPositionLoopInterval
const updatePointsPositionLoop = () => {
  pointsPosition.value = random(-40, 40)
  updatePointsPositionLoopInterval = setTimeout(updatePointsPositionLoop, random(1500, 2000))
}

watch(pointsPosition, (value) => gsap.to(pointsPositionTween, { value, duration: 2, ease }))
updatePointsPositionLoop()
onUnmounted(() => clearInterval(updatePointsPositionLoopInterval))

const labelPosition = ref(0)
const labelPositionTween = ref(0)
let updateLabelPositionLoopInterval
const updateLabelPositionLoop = () => {
  labelPosition.value = random(0, 100)
  updateLabelPositionLoopInterval = setTimeout(updateLabelPositionLoop, random(100, 2000))
}

watch(labelPosition, (value) => gsap.to(labelPositionTween, { value, duration: 1.5, ease }))
updateLabelPositionLoop()
onUnmounted(() => clearInterval(updateLabelPositionLoopInterval))
</script>

<template>
  <div class="Compass">
    <div class="Compass__line" />

    <div
      class="Compass__points"
      :style="`transform: translateY(${pointsPositionTween - 50}%)`"
    >
      <div
        v-for="letter in alphabet"
        :key="letter"
        class="Compass__point"
      >
        <div class="Compass__point-label">
          {{ letter }}
        </div>
      </div>
    </div>

    <div class="Compass__label">
      <div class="Compass__label-dot" />
      <img src="@/assets/compass-label.png" alt="" class="Compass__label-img">
    </div>
  </div>
</template>

<style lang="scss">
.Compass {
  position: absolute;
  height: 350px;
  width: 130px;
  top: 200px;
  left: 30px;
  overflow: hidden;

  &__line {
    position: absolute;
    top: 0;
    left: 10px;
    width: 1px;
    height: 100%;
    background: white;
  }

  &__points {
    position: absolute;
    top: 50%;
    left: 7px;
    width: 100%;
  }

  &__point {
    position: relative;
    height: 7px;
    width: 7px;
    border-radius: 2px;
    background: white;
    transform: rotate(90deg);
    margin-top: 65px;

    &:first-child {
      margin-top: 40px;
    }

    &:last-child {
      margin-bottom: 40px;
    }

    &-label {
      position: absolute;
      top: -15px;
      left: 50%;
      font-family: 'Ethnocentric Rg', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      color: #FFFFFF;
      transform: translate(-50%, -100%);
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 0;

    &-dot {
      height: 21px;
      width: 21px;
      background: rgba(white, .5);
      border-radius: 50%;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 11px;
        height: 11px;
        border: 1px solid white;
        border-radius: 50%;
        background: #D7E0E6;
      }
    }

    &-img {
      position: absolute;
      width: 100px;
      height: 30px;
      left: 34px;
      top: -4px;
    }
  }
}
</style>
