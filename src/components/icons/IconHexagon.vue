<script setup>
import { defineProps } from 'vue'

defineProps({
  isFilled: Boolean,
})
</script>

<template>
  <svg class="IconHexagon" :class="{ 'IconHexagon--filled': isFilled }" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.25 1.01036C4.7141 0.742414 5.2859 0.742414 5.75 1.01036L8.08013 2.35566C8.54423 2.62361 8.83013 3.1188 8.83013 3.6547V6.3453C8.83013 6.8812 8.54423 7.37639 8.08013 7.64434L5.75 8.98964C5.2859 9.25759 4.7141 9.25759 4.25 8.98964L1.91987 7.64434C1.45577 7.37639 1.16987 6.8812 1.16987 6.3453V3.6547C1.16987 3.1188 1.45577 2.62361 1.91987 2.35566L4.25 1.01036Z" stroke="#00202D"/>
  </svg>
</template>

<style lang="scss">
.IconHexagon {
  height: 1em;
  width: 1em;

  path {
    stroke: currentColor;
    fill: transparent;
    opacity: .5;
  }

  &--filled {
    path {
      opacity: 1;
      fill: currentColor;
    }
  }
}
</style>
