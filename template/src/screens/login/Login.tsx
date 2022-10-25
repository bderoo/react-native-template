import PageContainer from '@components/pageContainer'
import PrimaryButton from '@components/primaryButton'
import { H3 } from '@components/text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Roots } from '@/navigation'
import { login } from '@/stores/AuthStore'
import { navigate } from '@/stores/NavigationStore'

import styles from './styles'

const Login = () => {
  const { t } = useTranslation('login')
  const handleLogin = () => {
    login('test_user', 'test_password')
      .then(() => {
        navigate(Roots.Home)
      })
  }
  return (
    <PageContainer>
      <View style={styles.headerWrapper}>
        <H3>{t('login')}</H3>
      </View>
      <PrimaryButton
        title={t('login')}
        onPress={handleLogin}
      />
    </PageContainer>
  )
}

export default Login
