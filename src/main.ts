import { createApp } from 'vue'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

createApp(App)
    .use(PrimeVue)
    .mount('#app')
