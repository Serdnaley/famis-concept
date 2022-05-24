<script setup>
import HeaderLogo from '@/components/HeaderLogo.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
</script>

<template>
  <div class="Header">
    <HeaderLogo class="Header__logo"/>
    <HeaderMenu class="Header__menu"/>

    <div class="Header__ranking">
      <div class="Header__ranking-title">Current Ranking</div>
      <div class="Header__ranking-value">#2602</div>
    </div>
  </div>
</template>

<style lang="scss">
.Header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
  display: flex;
  align-items: center;

  &__menu {
    margin-left: 100px;
  }

  &__ranking {
    margin-left: auto;
    margin-right: 30px;

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #00202D;
      opacity: 0.5;
    }

    &-value {
      font-family: 'Ethnocentric Rg', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 21px;
      color: #141E22;
      margin-top: 5px;
    }
  }
}
</style>
