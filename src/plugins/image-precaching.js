import { useImagePrecache } from '@/services/useImagePrecache'

const { preload } = useImagePrecache()

const images = import.meta.glob('@/assets/**/*.(png|svg|jpg|jpeg)')
const onProgress = (progress) => {
  document.querySelector('#AppLoading__percent').innerText = Math.round(progress * 100)
}
const onComplete = () => {
  document.querySelector('#AppLoading').classList.add('Loading--hidden')
  setTimeout(() => {
    document.querySelector('#AppLoading').remove()
  }, 1000)
}

export const imagePrecachingPlugin = () => {
  preload(Object.values(images), { onProgress }).then(onComplete)
}
