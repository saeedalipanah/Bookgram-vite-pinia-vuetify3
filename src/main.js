import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import Pagination from './components/common/Pagination.vue'
import { createPinia } from 'pinia';
// import vuetify from './plugins/vuetify'
// set up vuetify with theme and icons
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { loadFonts } from './plugins/webfontloader'
loadFonts()
const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(vuetify)
app.use(pinia)
app.component('Pagination', Pagination)
app.mount('#app')
