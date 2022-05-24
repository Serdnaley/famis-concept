import { createApp } from 'vue'
import { mouseWatcherPlugin } from '@/plugins/mouse-watcher-plugin'

import App from './App.vue'

createApp(App)
  .use(mouseWatcherPlugin)
  .mount('#app')
