import Button from '@components/button'
import { Props as ButtonProps } from '@components/button/Button'
import * as React from 'react'

import styles from './styles'

const LinkButton = (props: ButtonProps) => (
  <Button
    disabledButtonStyle={styles.disabled}
    pressedButtonStyle={styles.pressed}
    buttonStyle={styles.default}
    disabledTextStyle={styles.disabledText}
    pressedTextStyle={styles.pressedText}
    textStyle={styles.text}
    {...props}
  />
)

export default LinkButton
