import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import i18n from './plugins/i18n'
import './assets/style/tailwind.css'

// helpers
import extend from './common/helpers/extend'
import useMock from '../tests/useMock'

extend()
useMock(true)

createApp(App).use(i18n).use(store).use(router).mount('#app')
