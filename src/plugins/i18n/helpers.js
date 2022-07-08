const defaultLang = 'zh-TW'

/**
 * 取得 i18n 語系文檔
 * @param {*} lang 語系
 * @returns
 */
export const getLocale = (lang = defaultLang) => {
  let locale
  try {
    locale = require(`@/plugins/i18n/locales/${lang}`).default
  } catch (error) {
    console.warn("Locale of user's language is not found. Use default lang...")
    locale = require(`@/plugins/i18n/locales/${defaultLang}`).default
  }

  const messages = {}
  messages[lang] = locale
  return messages
}
