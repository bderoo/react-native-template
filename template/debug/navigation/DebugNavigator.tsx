import SvgIcon from '@components/svgIcon/SvgIcon'
import { Icons } from '@constants/images'
import navigationStyles from '@navigation/styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NetworkItem from '@screens/networkItem'
import NetworkRequests from '@screens/networkRequests'
import { goBack } from '@stores/NavigationStore'
import React from 'react'
import { Pressable, View } from 'react-native'

import { Roots, RootStackParamList } from '@/navigation'

const Stack = createNativeStackNavigator<RootStackParamList>()

const headerLeft = () => (
  <Pressable onPress={goBack} style={navigationStyles.headerLeftContainer}>
    <View>
      <SvgIcon image={Icons.arrowLeft} />
    </View>
  </Pressable>
)

const headerOptions = (
  title: string | (() => void),
  showBackButton = true,
): Record<string, unknown> => ({
  headerTitle: title,
  headerLeft: showBackButton ? headerLeft : () => <View />,
  headerStyle: navigationStyles.header,
})

const DebugNavigator = () => (
  <Stack.Navigator screenOptions={{
    gestureEnabled: false,
    presentation: 'transparentModal',
  }}
  >
    <>
      <Stack.Screen
        name={Roots.__NetworkRequests}
        component={NetworkRequests}
        options={headerOptions(() => null, true)}
      />
      <Stack.Screen
        name={Roots.__RequestInfo}
        component={NetworkItem}
        options={headerOptions(() => null, true)}
      />
    </>
  </Stack.Navigator>
)

export default DebugNavigator
