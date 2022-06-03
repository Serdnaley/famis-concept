<script setup>
import { defineProps } from 'vue'
import image1 from '@/assets/flag-1.png'
import image2 from '@/assets/flag-2.png'

defineProps({
  styleVariant: {
    type: String,
    default: 'black',
  },

  size: {
    type: String,
    default: 'small',
  },

  number: {
    type: [String, Number],
    default: '',
  },
})
</script>

<template>
  <div class="Flag" :class="`Flag--size-${size} Flag--style-${styleVariant}`">
    <img :src="styleVariant === 'blue' ? image2 : image1" class="Flag__img">

    <div class="Flag__number">
      <slot>
        {{ number }}
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.Flag {
  $this: &;
  position: relative;

  &--size-large {
    height: 57px;
    width: 35px;

    #{ $this }__img {
      margin-top: -3px;
    }

    #{ $this }__number {
      font-size: 14px;
    }
  }

  &--size-small {
    height: 36px;
    width: 24px;

    #{ $this }__img {
      margin-top: -2px;
    }

    #{ $this }__number {
      font-size: 10px;
    }
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &__number {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'Ethnocentric', sans-serif;
    color: white;
  }
}
</style>
