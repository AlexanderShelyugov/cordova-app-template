import { createApp } from 'vue'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
// @ts-ignore
import Lara from './presets/lara'

createApp(App)
    .use(PrimeVue, {
        unstyled: true,
        pt: Lara
    })
    .mount('#app')
