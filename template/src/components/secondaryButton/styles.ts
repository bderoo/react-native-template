import { baseStyles } from '@components/button/styles'
import { StyleSheet } from 'react-native'

import { Colors } from '@/theme'

const styles = StyleSheet.create({
  default: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.accentGray,
  },
  pressed: {
    ...baseStyles,
    borderColor: Colors.accentGray,
    backgroundColor: Colors.almostBlack,
  },
  disabled: {
    ...baseStyles,
    backgroundColor: Colors.lightGray,
    borderColor: Colors.lightGray,
  },
  disabledText: {
    color: Colors.accentGray3,
  },
})

export default styles
