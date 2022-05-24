<script setup>
import IconChevron from '@/components/icons/IconChevron.vue'
</script>

<template>
  <div class="HeaderMenu">
    <div class="HeaderMenu__item">
      <span>Battlepass</span>
      <div class="HeaderMenu__attention-dot" />
    </div>
    <div class="HeaderMenu__item">
      <span>Shop</span>
      <IconChevron />
    </div>
    <div class="HeaderMenu__item">
      <span>Options</span>
    </div>
  </div>
</template>

<style lang="scss">
.HeaderMenu {
  display: flex;
  gap: 30px;

  &__item {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #00202D;
    display: flex;
    align-items: center;

    span {
      opacity: 0.5;
    }
  }

  &__attention-dot {
    position: relative;
    height: 12px;
    width: 12px;
    transform: translateY(-75%) rotate(-45deg);

    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background: #EB7315;
      height: 100%;
      width: 100%;
      border-radius: 4px;
    }

    &:before {
      opacity: .5;
    }

    &:after {
      transform: scale(.8);
      transform-origin: top right;
    }
  }
}
</style>
