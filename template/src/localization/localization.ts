import 'intl-pluralrules'

import RNLanguageDetector from '@os-team/i18next-react-native-language-detector'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonTranslationsEN from './en/common'
import homeTranslationsEN from './en/homeScreen'
import internalTranslationsEN from './en/internal'
import loginTranslationsEN from './en/loginScreen'
import registerTranslationsEN from './en/registerScreen'
import validationsTranslationsEN from './en/validations'
import commonTranslationsES from './es/common'
import homeTranslationsES from './es/homeScreen'
import loginTranslationsES from './es/loginScreen'
import validationsTranslationsES from './es/validations'

export const defaultNS = 'common'
export const namespaces = [
  'common',
  'validations',
  'login',
  'home',
  'register',
  'internal',
] as const
export const resources = {
  en: {
    common: commonTranslationsEN, validations: validationsTranslationsEN, login: loginTranslationsEN, home: homeTranslationsEN, register: registerTranslationsEN, internal: internalTranslationsEN,
  },
  es: {
    common: commonTranslationsES,
    validations: validationsTranslationsES,
    login: loginTranslationsES,
    home: homeTranslationsES,
  },
} as const
i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    ns: namespaces,
    defaultNS,
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (format === 'uppercase') return value.toUpperCase()
        if (format === 'lowercase') return value.toLowerCase()
        if (format === 'capitalize') {
          return (value.charAt(0).toUpperCase() + value.slice(1))
        }
        return value
      },
    },
    resources,
  })
export default i18n
