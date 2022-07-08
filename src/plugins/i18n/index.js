import { createI18n } from 'vue-i18n'
import { getLocale } from './helpers'

const userLang = localStorage.getItem('language')
const messages = getLocale(userLang)

const i18n = createI18n({
  legacy: false,
  locale: userLang,
  messages,
})

export default i18n
