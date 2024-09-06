import { h, onMounted } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import mixpanel from 'mixpanel-browser'

import './tailwind.postcss'
import './custom.css'
import HeroPattern from './components/HeroPattern.vue'
import HeroVideo from './components/HeroVideo.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HeroPattern),
      'home-hero-image': () => h(HeroVideo)
    })
  },
} satisfies Theme
