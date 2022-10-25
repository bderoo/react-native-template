import styled from '@emotion/native'
import { StyleSheet } from 'react-native'

import { Colors, Metrics } from '@/theme'

type Props = {
  center?: boolean
}

export const StyledSafeAreaView = styled.SafeAreaView(({ center }: Props) => ({
  flex: 1,
  justifyContent: center ? 'center' : undefined,
  backgroundColor: Colors.backgroundGray,
}))

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: Metrics.small,
    paddingVertical: Metrics.small,
    minHeight: Metrics.safeViewContainerHeight - 56,
  },
  spinner: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    elevation: 10,
  },
})

export default styles
