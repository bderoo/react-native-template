import { StyleSheet } from 'react-native'

import { Colors } from '@/theme'

const styles = StyleSheet.create({
  default: {
  },
  pressed: {
  },
  disabled: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.lightGray,
  },
  text: {
    color: Colors.primary,
    textTransform: 'none',
  },
  disabledText: {
    color: Colors.accentGray3,
  },
  pressedText: {
    textTransform: 'none',
  },
})

export default styles
