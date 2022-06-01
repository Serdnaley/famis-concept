<script setup>
import { computed, inject } from 'vue'

const mouse = inject('$mouse')
const parallaxStyles = computed(() => ({
  transform: `translate3d(${mouse.tweenPosition.x * 5}%, ${mouse.tweenPosition.y * 5}%, 0)`,
}))
</script>

<template>
  <div class="Background">
    <div class="Background__effects Background__effects--back">
      <img
        src="@/assets/effects/smooth-blue-vignette.png"
        alt=""
        class="Background__effect Background__effect--smooth-blue-vignette"
      >

      <img
        src="@/assets/effects/star-light-vignette.png"
        alt=""
        class="Background__effect Background__effect--star-light-vignette"
      >
    </div>

    <div :style="parallaxStyles" class="Background__effects Background__effects--main-picture">
      <img
        src="@/assets/main-picture.png"
        alt=""
        class="Background__effect Background__effect--main-picture"
      >
    </div>

    <div class="Background__effects Background__effects--smoke">
      <img
        src="@/assets/effects/smoke.png"
        alt=""
        class="Background__effect Background__effect--smoke Background__effect--smoke-1"
      >
      <img
        src="@/assets/effects/smoke.png"
        alt=""
        class="Background__effect Background__effect--smoke Background__effect--smoke-2"
      >
      <img
        src="@/assets/effects/smoke.png"
        alt=""
        class="Background__effect Background__effect--smoke Background__effect--smoke-3"
      >
      <img
        src="@/assets/effects/smoke.png"
        alt=""
        class="Background__effect Background__effect--smoke Background__effect--smoke-4"
      >
      <img
        src="@/assets/effects/smoke.png"
        alt=""
        class="Background__effect Background__effect--smoke Background__effect--smoke-5"
      >

    </div>
  </div>
</template>

<style lang="scss">
.Background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;

  &__effects {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;

    &--back {
      z-index: 1;
    }

    &--main-picture {
      z-index: 2;
    }

    &--smoke {
      z-index: 3;
      mix-blend-mode: screen;
    }
  }

  &__effect {
    position: absolute;
    transform-origin: center;

    &--smoke {
      width: 140%;
      height: auto;
      bottom: -30%;
      left: -20%;
      opacity: 0;
      z-index: 4;
      animation: Background__breathing--smoke 3s ease-in-out infinite;

      @keyframes Background__breathing--smoke {
        0%, 100% {
          opacity: 0;
        }

        50% {
          opacity: .5;
        }
      }

      $delay: .5s;

      &-1 {
        animation-delay: $delay * 0;
        transform: translate(-10%, 20%);
      }

      &-2 {
        animation-delay: $delay * 1;
        transform: translate(0, 15%);
      }

      &-3 {
        animation-delay: $delay * 2;
        transform: translate(10%, 10%);
      }

      &-4 {
        animation-delay: $delay * 3;
        transform: translate(0, 5%);
      }

      &-5 {
        animation-delay: $delay * 4;
        transform: translate(-10%, 0);
      }
    }

    &--main-picture {
      width: 110%;
      height: 110%;
      top: -5%;
      left: -5%;
      object-fit: cover;
      animation: Background__breathing--main-picture 10s ease-in-out infinite;

      @keyframes Background__breathing--main-picture {
        0%, 100% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.05);
        }
      }
    }

    &--smooth-blue-vignette {
      height: 150%;
      width: 150%;
      left: -25%;
      top: -25%;
      object-fit: cover;
      mix-blend-mode: soft-light;
      animation: Background__breathing--smooth-blue-vignette 4.5s ease-in-out infinite;

      @keyframes Background__breathing--smooth-blue-vignette {
        0%, 100% {
          transform: scale(.8);
        }

        50% {
          transform: scale(1.2);
        }
      }
    }

    &--star-light-vignette {
      width: 183vmax;
      height: 163vmax;
      left: -20vmax;
      top: -62vmax;
      mix-blend-mode: screen;
      transform: rotate(-60deg);
      animation: Background__breathing--star-light-vignette 15s ease-in-out infinite;

      @keyframes Background__breathing--star-light-vignette {
        0%, 100% {
          transform: rotate(-50deg) translateX(-10px) scale(1);
        }

        50% {
          transform: rotate(-70deg) translateX(10px) scale(1.2);
        }
      }
    }
  }
}
</style>
