import { createApp } from 'vue'
import { mouseWatcherPlugin } from '@/plugins/mouse-watcher-plugin'

import 'swiper/css'

import App from './App.vue'

createApp(App)
  .use(mouseWatcherPlugin)
  .mount('#app')
