import PageContainer from '@components/pageContainer'
import { H1 } from '@components/text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { login } from '@/stores/AuthStore'

import Form, { FormValues } from './Form'
import styles from './styles'

const Login = () => {
  const [loginErrors, setLoginErrors] = React.useState<string[]>([])

  const { t } = useTranslation('common')

  const handleLogin = (data: FormValues) => {
    login(data.userName, data.password)
      .catch((err) => {
        setLoginErrors([err.message])
      })
  }

  return (
    <PageContainer>
      <View style={styles.headerWrapper}>
        <H1>{t('login')}</H1>
      </View>
      <Form
        handleSubmit={handleLogin}
        submitErrors={loginErrors}
        setSubmitErrors={setLoginErrors}
      />
    </PageContainer>
  )
}

export default Login
