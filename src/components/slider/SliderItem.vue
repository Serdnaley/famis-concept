<script setup>
import { computed, ref, watch } from 'vue'
import { useSwiper } from 'swiper/vue'
import { findIndex } from 'lodash-es'
import gsap from 'gsap'
import SliderItemBgLine from '@/components/slider/SliderItemBgLine.vue'
import SliderItemContent from '@/components/slider/SliderItemContent.vue'

defineProps({
  card: Object,
})

const el = ref(null)
const swiper = useSwiper()

const slideSnapIndex = computed(() => findIndex(swiper.value.slides, (slide) => slide.children[0] === el.value))
const position = computed(() => {
  if (!swiper.value) return 0

  const { translate, virtualSize, slides } = swiper.value
  const progress = translate / virtualSize * -1

  const position = Math.abs(slideSnapIndex.value - progress * slides.length)

  if (position > .95) return 0
  if (position < .05) return 1
  return 1 - position
})
const positionTween = ref(position.value)

watch(position, (value) => gsap.to(positionTween, { value, duration: .3 }))
</script>

<template>
  <div
    ref="el"
    class="SliderItem"
    :style="`--k: ${positionTween}`"
  >
    <div class="SliderItem__inner">
      <div class="SliderItem__bg">
        <div class="SliderItem__bg-part SliderItem__bg-part-1" />
        <div class="SliderItem__bg-part SliderItem__bg-part-2" />
        <div class="SliderItem__bg-part SliderItem__bg-part-3" />
        <div class="SliderItem__bg-part SliderItem__bg-part-4">
          <SliderItemBgLine v-for="i in 10" :key="i" />
        </div>
      </div>
      <div class="SliderItem__content">
        <SliderItemContent :card="card" :position="+positionTween" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.SliderItem {
  position: relative;
  height: 300px;
  width: 400px;
  transform: translateX(calc(10% * var(--k)));

  &__inner {
    position: absolute;
    height: calc(180px + var(--k) * 120px);
    width: calc(400px + var(--k) * 120px);
    right: 0;
    bottom: 0;
  }

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;

    &-part {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 0;
      overflow: hidden;

      &-1 {
        opacity: calc(1 - var(--k));
        border-radius: 10px 30px 10px 30px;
        transform: skewX(-30deg);

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        &:before {
          background: url(@/assets/effects/white-shadow-lines.png) no-repeat;
          background-size: 1000px 656px;
          width: 200%;
          height: 300%;
          left: -30%;
          top: -50%;
          transform: rotate(-13deg) skewX(30deg);
          transform-origin: center;
        }

        &:after {
          background: linear-gradient(30deg, white 60%, rgba(white, 0) 80%);
        }
      }

      &-2 {
        opacity: calc(1 - var(--k));
        width: calc(100% + 10px);
        height: calc(100% + 7px);
        left: -10px;
        top: -7px;
        border-radius: 10px 30px 10px 30px;
        transform: skewX(-30deg);
        background: rgba(white, .5);
      }

      &-3 {
        opacity: var(--k);
        border-radius: 10px 30px 10px 30px;
        transform: skewX(-30deg);
        background: linear-gradient(245deg, #E4E7ED 25%, #C3C8CF 75%);
      }

      &-4 {
        opacity: var(--k);
        width: calc(100% - 20px);
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px 30px 0 0;
        transform: skewX(-30deg);
        background: linear-gradient(190deg, #FFFFFF 31.78%, rgba(255, 255, 255, 0) 52.6%);
        box-shadow: -1px 11px 15px rgba(0, 20, 29, 0.05);
      }
    }
  }

  &__content {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: black;
  }
}
</style>
