import { difference, isFunction } from 'lodash-es'

const preloadedImages = []

const $cache = document.createElement('div')

const styles = 'position:absolute;left:0px;top:0px;opacity:0;width:10px;height:10px;overflow:hidden;pointer-events:none;z-index:-20;'

$cache.style = $cache.style.cssText = styles
$cache.id = 'image-precache'

document.body.append($cache)

const preloadImage = (url) => new Promise((resolve, reject) => {
  if (isFunction(url)) url = url()
  if (url instanceof Promise) return resolve(url.then((module) => preloadImage(module.default)))

  if (preloadedImages.includes(url)) {
    return resolve()
  }

  const img = new Image()

  img.addEventListener('load', (event) => {
    preloadedImages.push(url)
    resolve(event)
  })

  img.addEventListener('error', (err) => {
    console.error(err.message)
    reject(err)
  })

  img.src = url
  img.style = 'position:absolute;width:auto;height:auto;'

  $cache.append(img)
})

const preloadImages = async (urls, onProgress = () => {}) => {
  let loadedCounter = 0
  const toBeLoadedNumber = urls.length

  await Promise.all(urls.map((url) => {
    return preloadImage(url)
      .catch(console.error)
      .finally(() => {
        loadedCounter++
        onProgress(loadedCounter / toBeLoadedNumber)
      })
  }))
}

export const useImagePrecache = () => {
  const preload = async (urls, { onProgress = () => {} } = {}) => {
    const urlToBeLoaded = difference(urls, preloadedImages)

    if (urlToBeLoaded.length === 0) return

    await preloadImages(urls, onProgress)
  }

  return {
    preload,
  }
}

