<script setup>
import { defineProps } from 'vue'
import Flag from '@/components/Flag.vue'
import Label from '@/components/Label.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconAward from '@/components/icons/IconAward.vue'
import IconDollar from '@/components/icons/IconDollar.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconLock from '@/components/icons/IconLock.vue'
import SliderItemProgressBar from '@/components/slider/SliderItemProgressBar.vue'
import IconHexagon from '@/components/icons/IconHexagon.vue'

defineProps({
  index: Number,
  position: Number,
})
</script>

<template>
  <div class="SliderItemContent">
    <div class="SliderItemContent__img">
      <img src="@/assets/equipments/helmet.png" alt="">
    </div>

    <div class="SliderItemContent__info">
      <div class="SliderItemContent__info-title">
        met helmet
      </div>
      <div class="SliderItemContent__info-subtitle">
        Model: <span>FX-920/13</span>
      </div>
    </div>

    <div class="SliderItemContent__flags">
      <Flag style-variant="black" size="large" number="3" />
      <Flag style-variant="blue" size="small" number="2" />
    </div>

    <div class="SliderItemContent__top-labels">
      <Label style-variant="blue">
        <IconStar />
        Upgrade
      </Label>

      <Label v-if="false" style-variant="light-blue">
        <IconAward />
        Booster
      </Label>

      <Label v-if="false" style-variant="purple">
        <IconDollar />
        Gold
      </Label>

      <Label v-if="false" style-variant="transparent">
        <IconLock />
        Lock
      </Label>
    </div>

    <div class="SliderItemContent__progress">
      <SliderItemProgressBar text="Power" />
    </div>

    <div class="SliderItemContent__bottom-labels">
      <Label style-variant="gray">
        <IconPlus />
        Add
      </Label>
    </div>

    <div class="SliderItemContent__switches">
      <div class="SliderItemContent__switches-item SliderItemContent__switches-item--active">L2</div>
      <div class="SliderItemContent__switches-item">R2</div>
    </div>

    <div class="SliderItemContent__dots">
      <IconHexagon :is-filled="index % 3 === 0" />
      <IconHexagon :is-filled="index % 3 === 1" />
      <IconHexagon :is-filled="index % 3 === 2" />
    </div>

    <div class="SliderItemContent__path">
      <div class="SliderItemContent__path-start" />
      <div class="SliderItemContent__path-end" />
      <div class="SliderItemContent__path-line">
        <svg width="128" height="64" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 63L34.926 2.01681C35.2807 1.38855 35.9462 1 36.6676 1H128" stroke="#EB6E15"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/mixins/mixins.scss";

.SliderItemContent {
  position: absolute;
  height: 100%;
  width: connectToVar(100%, 85%);
  right: 0;
  top: 0;
  user-select: none;

  &__img {
    position: absolute;
    width: connectToVar(70px, 70px * 2.5);
    height: connectToVar(84px, 84px * 2.5);
    bottom: connectToVar(17px, 64px);
    left: connectToVar(35px, 56px);

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__info {
    position: absolute;
    top: connectToVar(15px, calc(100% - 90px));
    left: 55px;
    padding-left: connectToVar(0px, 14px);

    &:before {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #EB153C;
      border-radius: 2px;
      opacity: var(--k);
      transform: translateX(connectToVar(-14px, 0px));
    }

    &-title {
      font-family: 'Ethnocentric', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 21px;
      text-transform: uppercase;
    }

    &-subtitle {
      font-family: 'SF Pro Display', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgba(#00202D, .5);

      span {
        color: #00202D;
      }
    }
  }

  &__flags {
    position: absolute;
    top: 0;
    left: 50px;
    opacity: var(--k);
    display: flex;
    gap: 5px;
  }

  &__top-labels {
    position: absolute;
    top: 15px;
    right: 0;
    opacity: calc(1 - var(--k));
  }

  &__progress {
    position: absolute;
    right: connectToVar(30px, -10px);
    bottom: connectToVar(50px, calc(100% - 80px));
  }

  &__bottom-labels {
    position: absolute;
    width: 247px;
    bottom: 16px;
    right: 35px;
    border-radius: 5px;
    overflow: hidden;
    opacity: calc(1 - var(--k));
  }

  &__switches {
    position: absolute;
    bottom: 16px;
    left: 54px;
    display: flex;
    gap: 6px;
    opacity: var(--k);

    &-item {
      height: 22px;
      width: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'SF Pro Display', sans-serif;
      font-style: italic;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      border: 1px solid #00202D;
      border-radius: 20px 20px 100px 100px;
      color: #00202D;

      &--active {
        color: #5411E8;
        border-color: #5411E8;
      }
    }
  }

  &__dots {
    font-size: 10px;
    position: absolute;
    bottom: 16px;
    right: connectToVar(64px, 260px);
    height: 22px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__path {
    position: absolute;
    bottom: connectToVar(41px, calc(100% - 98px));
    left: connectToVar(78px, 187px);
    height: connectToVar(48px, 28px);
    width: connectToVar(52px, 28px);
    overflow: hidden;
    z-index: 0;

    &-start {
      position: absolute;
      height: connectToVar(10px, 28px);
      width: connectToVar(10px, 28px);
      right: connectToVar(6px, 0px);
      top: connectToVar(6px, 0px);
      background: white;
      border: 2px solid rgba(235, 110, 21, calc(1 - var(--k)));
      border-radius: 50%;

      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 16px;
        width: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        background: white;
        border-radius: 50%;
      }
    }

    &-end {
      position: absolute;
      height: 20px;
      width: 20px;
      left: connectToVar(0px, 4px);
      bottom: connectToVar(0px, 4px);
      z-index: 0;
      background: mix(white, #EB6E15, 65%);
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 10px;
        width: 10px;
        background: #EB6E15;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        background: transparent;
        border: 1px solid #EB6E15;
        animation: SliderItemContent__path-end-animation 2s infinite;

        @keyframes SliderItemContent__path-end-animation {
          0% {
            transform: translate(-50%, -50%) scale(.5);
            opacity: 1;
          }

          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      }
    }

    &-line {
      position: absolute;
      height: 25px;
      width: connectToVar(46px, 0px);
      top: 10px;
      left: -10px;
      z-index: 0;
      overflow: hidden;
      opacity: calc(1 - var(--k));
    }
  }
}
</style>
