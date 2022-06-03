<script setup>
import { defineProps } from 'vue'

defineProps({
  styleVariant: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div class="Label" :class="`Label--style-${styleVariant}`">
    <slot />
  </div>
</template>

<style lang="scss">
.Label {
  width: fit-content;
  position: relative;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  z-index: 0;
  padding: 4px 5px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 15px);
    height: 100%;
    left: 50%;
    top: 0;
    background: transparent;
    z-index: -1;
    border-radius: 4px 7px 4px 7px;
    transform: skewX(-27deg) translateX(calc(-50% + 3px));
  }

  &--style-transparent {
    color: rgba(#00202D, .5);
    font-weight: 700;
  }

  &--style-blue {
    color: white;

    &:before {
      background: radial-gradient(100% 100% at 50% 0%, rgba(37, 153, 199, 0) 80%, rgba(19, 106, 140, 0.3) 100%),
        linear-gradient(260deg, #5CCAF5 -30%, #2599C7 85%);
    }
  }

  &--style-light-blue {
    color: #0D8AEE;

    &:before {
      background: rgba(#0D8AEE, .2);
    }
  }

  &--style-purple {
    color: #5A0DEE;

    &:before {
      background: rgba(#5A0DEE, .2);
    }
  }

  &--style-gray {
    color: rgba(#00202D, .5);

    &:before {
      background: rgba(#00202D, .1);
    }
  }
}
</style>
