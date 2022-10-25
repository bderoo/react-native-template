import ComplexTranslation from '@components/complexTranslation'
import PageContainer from '@components/pageContainer'
import { H2 } from '@components/text'
import { authStore } from '@stores/AuthStore'
import React from 'react'
import { View } from 'react-native'
import { useSnapshot } from 'valtio'

const Login = () => {
  const { me } = useSnapshot(authStore)
  return (
    <PageContainer>
      <View>
        {me && (
          <ComplexTranslation
            namespace="home"
            i18nKey="greetings"
            values={{ name: me.username }}
            Parent={H2}
          />
        )}
      </View>
    </PageContainer>
  )
}

export default Login
