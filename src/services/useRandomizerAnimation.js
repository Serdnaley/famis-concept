import { onUnmounted, ref, watch } from 'vue'
import { random } from 'lodash-es'
import gsap from 'gsap'
import CustomEase from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

const defaultEase = CustomEase.create("custom", "M0,0 C0.3,0 0.4,0.3 0.5,0.5 0.6,0.7 0.7,1 1,1")

export const useRandomizerAnimation = ({
  min,
  max,
  durationMin,
  durationMax,
  ease = defaultEase,
} = {}) => {
  const position = ref(random(min, max))
  const positionTween = ref(position.value)

  let timeout
  const update = () => {
    position.value = random(min, max)
    timeout = setTimeout(update, random(durationMin, durationMax))
  }

  watch(position, (value) => gsap.to(positionTween, { value, duration: durationMax / 1000, ease }))
  update()
  onUnmounted(() => clearTimeout(timeout))

  return positionTween
}
