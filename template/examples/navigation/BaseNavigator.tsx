import AuthedNavigator from '@navigation/AuthedNavigator'
import DebugNavigator from '@navigation/DebugNavigator'
import NonAuthedNavigator from '@navigation/NonAuthedNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { authStore } from '@stores/AuthStore'
import React from 'react'
import { useSnapshot } from 'valtio'

import Config from '@/config'
import { Roots } from '@/navigation'

const Stack = createNativeStackNavigator()

const BaseNavigator = () => {
  const { accessToken } = useSnapshot(authStore)
  const primaryScreens = accessToken ? (
    <Stack.Screen
      name={Roots.AuthedStack}
      component={AuthedNavigator}
      options={{ headerShown: false }}
    />
  ) : (
    <Stack.Screen
      name={Roots.NonAuthedStack}
      component={NonAuthedNavigator}
      options={{ headerShown: false }}
    />
  )

  // @@SECTION DEBUG
  const debugScreens = Config.DEBUG_ENABLED && (
    <Stack.Screen name={Roots.DebugStack} component={DebugNavigator} />
  )
  // @@ENDSECTION DEBUG
  return (
    <Stack.Navigator screenOptions={{
      gestureEnabled: false,
      presentation: 'transparentModal',
    }}
    >
      {primaryScreens}
      {debugScreens}
    </Stack.Navigator>
  )
}

export default BaseNavigator
