import { authStore, logout } from '@stores/AuthStore'
import { navigate } from '@stores/NavigationStore'
import React, { useCallback, useEffect, useState } from 'react'

import { Roots } from '@/navigation'

const DebugLoader = () => {
  const [DebugComponent, setDebugComponent] = useState<JSX.Element | null>(null)

  const setDynamicDebugComponent = useCallback(async () => {
    let DynamicComponent
    try {
      const asyncResponse = await import('@components/debug/Debug')
      const DebugComponent = asyncResponse.default
      DynamicComponent = (
        <DebugComponent
          actions={[
            { title: 'logout', onPress: logout },
            {
              title: 'register and login',
              onPress: () => {
                authStore.allowedUsers.push({
                  username: 'braian',
                  password: 'test',
                })
                authStore.me = {
                  id: '1',
                  username: 'braian',
                }
                authStore.accessToken = 'test'
              },
            },
            {
              title: 'network',
              onPress: () => (
                navigate(Roots.DebugStack, { screen: Roots.__NetworkRequests })
              ),
            },
          ]}
        />
      )
    } catch (e) {
      DynamicComponent = null
    }
    setDebugComponent(DynamicComponent)
  }, [])

  useEffect(() => {
    setDynamicDebugComponent()
  }, [setDynamicDebugComponent])

  return (
    DebugComponent
  )
}

export default DebugLoader
