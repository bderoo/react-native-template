import PageContainer from '@components/pageContainer'
import { H1 } from '@components/text'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

const Login = () => {
  const { t } = useTranslation('common')
  return (
    <PageContainer>
      <View>
        <H1>{t('profile')}</H1>
      </View>
    </PageContainer>
  )
}

export default Login
