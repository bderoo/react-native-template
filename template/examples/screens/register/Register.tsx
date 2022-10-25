import PageContainer from '@components/pageContainer'
import { H1 } from '@components/text'
import { navigate } from '@stores/NavigationStore'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Roots } from '@/navigation'
import { register } from '@/stores/AuthStore'

import Form, { FormValues } from './Form'
import styles from './styles'

const Register = () => {
  const { t } = useTranslation('register')
  const handleLogin = (data: FormValues) => {
    register(data.userName, data.password)
      .then(() => {
        navigate(Roots.Login)
      })
  }
  return (
    <PageContainer>
      <View style={styles.headerWrapper}>
        <H1>{t('register')}</H1>
      </View>
      <Form handleSubmit={handleLogin} />
    </PageContainer>
  )
}

export default Register
