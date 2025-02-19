import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { ru as primeVueLocaleRu } from 'primelocale/ru.json'

const app = createApp(App)

app.use(PrimeVue, {
  theme: { preset: Aura },
  locale: { ...primeVueLocaleRu },
})

app.mount('#app')
