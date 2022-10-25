import { StyleSheet, ViewStyle } from 'react-native'

export const baseStyles: ViewStyle = {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  minHeight: 43,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const styles = StyleSheet.create({
  baseTextStyle: {
    textTransform: 'uppercase',
    textAlign: 'left',
  },
})

export default styles
