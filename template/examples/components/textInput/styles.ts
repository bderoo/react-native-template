import { StyleSheet } from 'react-native'

import {
  Colors, FontFamilies, Metrics,
} from '@/theme'
import { FigmaColors } from '@/theme/colors'

const styles = StyleSheet.create({
  wrap: {
    borderColor: Colors.accentGray3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Metrics.small,
  },
  input: {
    flex: 1,
    color: Colors.textGray,
    paddingVertical: Metrics.xSmall,
    paddingLeft: Metrics.small,
    fontSize: Metrics.small,
    fontFamily: FontFamilies.regular,
    lineHeight: Metrics.large,
  },
  label: {
    alignSelf: 'flex-start',
    color: FigmaColors.labelColor,
  },
  required: {
    color: Colors.error,
    alignSelf: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
  leftIcon: {
    padding: Metrics.xxSmall,
  },
})

export default styles
