const DURATION = 1.5

import { gsap } from 'gsap'
import { reactive, watch } from 'vue'

const mouse = reactive({
  width: 0,
  height: 0,
  position: { x: 0, y: 0 },
  tweenPosition: { x: 0, y: 0 },
})

watch(() => mouse.position, (newPosition) => {
  gsap.to(mouse.tweenPosition, {
    duration: DURATION,
    x: newPosition.x,
    y: newPosition.y,
  })
}, { deep: true })

const { innerWidth, innerHeight } = typeof window === 'undefined' ? {} : window

const handleMouse = (e) => {
  mouse.position = {
    x: (e.clientX - mouse.width / 2) / innerWidth,
    y: (e.clientY - mouse.height / 2) / innerHeight,
  }
}

const handleResize = () => {
  mouse.width = innerWidth
  mouse.height = innerHeight
}

handleResize()
if (typeof document !== 'undefined') document.addEventListener('mousemove', (e) => handleMouse(e))
if (typeof window !== 'undefined') window.addEventListener('resize', handleResize)

export const mouseWatcherPlugin = (app) => {
  app.provide('$mouse', mouse)
}

