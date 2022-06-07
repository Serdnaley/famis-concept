import { createApp } from 'vue'
import { mouseWatcherPlugin } from '@/plugins/mouse-watcher-plugin'
import { imagePrecachingPlugin } from '@/plugins/image-precaching'

import 'swiper/css'

import App from './App.vue'

createApp(App)
  .use(mouseWatcherPlugin)
  .use(imagePrecachingPlugin)
  .mount('#app')
