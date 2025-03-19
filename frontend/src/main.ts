import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { ru as primeVueLocaleRu } from 'primelocale/ru.json'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: { darkModeSelector: '.dark' },
  },
  locale: { ...primeVueLocaleRu },
})

app.use(ToastService)

app.mount('#app')
