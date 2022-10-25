import { StyleSheet } from 'react-native'

import {
  Colors, Metrics,
} from '@/theme'

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
    marginBottom: Metrics.small,
  },
  text: {
    paddingHorizontal: Metrics.small,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.accentGray2,
  },
  errorMessage: {
    color: Colors.error,
    alignSelf: 'flex-start',
  },
})

export default styles
