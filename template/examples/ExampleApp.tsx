/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import DebugLoader from '@components/debugLoader'
import BaseNavigator from '@navigation/BaseNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { navigationStore } from '@stores/NavigationStore'
import React from 'react'
import { View } from 'react-native'
import { useSnapshot } from 'valtio'

import Config from '@/config'

const ExampleApp = () => {
  const { navigation } = useSnapshot(navigationStore)
  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        const startName = navigation.getCurrentRoute()?.name as string
        navigationStore.currentScreen = startName
        navigationStore.screenHistory = [startName]
      }}
    >
      <View style={{
        flex: 1,
      }}
      >
        <BaseNavigator />
      </View>
      {Config.DEBUG_ENABLED && <DebugLoader />}
    </NavigationContainer>
  )
}

ExampleApp.whyDidYouRender = true

export default ExampleApp
