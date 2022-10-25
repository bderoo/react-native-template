import Button from '@components/button'
import { Props as ButtonProps } from '@components/button/Button'
import * as React from 'react'

import { Colors } from '@/theme'

import styles from './styles'

const PrimaryButton = (props: ButtonProps) => (
  <Button
    disabledButtonStyle={styles.disabled}
    pressedButtonStyle={styles.pressed}
    buttonStyle={styles.default}
    disabledTextStyle={styles.disabledText}
    pressedTextStyle={{ color: Colors.primary }}
    textStyle={{ color: Colors.almostBlack }}
    {...props}
  />
)

export default PrimaryButton
