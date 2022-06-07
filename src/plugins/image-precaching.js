import { useImagePrecache } from '@/services/useImagePrecache'

const { preload } = useImagePrecache()

const images = import.meta.glob('@/assets/**/*.(png|svg|jpg|jpeg)')
const onProgress = (progress) => {
  document.querySelector('#AppLoading__percent').innerText = Math.round(progress * 100)
}
const onComplete = () => {
  document.querySelector('#AppLoading').remove()
}

export const imagePrecachingPlugin = () => {
  preload(Object.values(images), { onProgress }).then(onComplete)
}
