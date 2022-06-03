<script setup>
import { useRandomizerAnimation } from '@/services/useRandomizerAnimation'

const position = useRandomizerAnimation({
  min: -50,
  max: 150,
  durationMin: 10000,
  durationMax: 15000,
})
const width = useRandomizerAnimation({
  min: 30,
  max: 150,
  durationMin: 5000,
  durationMax: 10000,
})
const bgPos = useRandomizerAnimation({
  min: 0,
  max: 100,
  durationMin: 1000,
  durationMax: 5000,
})
</script>

<template>
  <div class="SliderItemBgLine" :style="{ left: `${position}%`, width: `${width}px`, backgroundPositionY: `${bgPos}%` }"/>
</template>

<style lang="scss">
.SliderItemBgLine {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: linear-gradient(to bottom, white, rgba(white, 0));
  background-size: 100% 200%;
  opacity: .5;
}
</style>
