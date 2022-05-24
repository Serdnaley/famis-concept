import { ViteSSG } from 'vite-ssg/single-page'
import { mouseWatcherPlugin } from '@/plugins/mouse-watcher-plugin'

import App from './App.vue'

export const createApp = ViteSSG(
  App,
  ({ app }) => {
    app.use(mouseWatcherPlugin)
  },
)
