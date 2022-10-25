import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '@screens/login'
import Register from '@screens/register'
import React from 'react'

import { Roots } from '@/navigation'

const Stack = createNativeStackNavigator()

const NonAuthedNavigator = () => (
  <Stack.Navigator screenOptions={{
    gestureEnabled: false,
    presentation: 'transparentModal',
  }}
  >
    <Stack.Screen
      name={Roots.Login}
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Roots.Register}
      component={Register}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default NonAuthedNavigator
