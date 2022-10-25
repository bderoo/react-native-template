import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import Profile from '@screens/profile'
import React from 'react'

import { Roots } from '@/navigation'

const Stack = createNativeStackNavigator()

const AuthedNavigator = () => (
  <Stack.Navigator screenOptions={{
    gestureEnabled: false,
    presentation: 'transparentModal',
  }}
  >
    <Stack.Screen
      name={Roots.Home}
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Roots.Profile}
      component={Profile}
    />
  </Stack.Navigator>
)

export default AuthedNavigator
