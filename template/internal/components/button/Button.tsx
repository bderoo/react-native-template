import { H3 } from '@components/text'
import * as React from 'react'
import { useCallback, useMemo } from 'react'
import {
  Pressable, PressableProps, PressableStateCallbackType, TextStyle, ViewStyle,
} from 'react-native'

import styles from './styles'

export interface BaseProps{
  disabledButtonStyle: Record<string, unknown>
  pressedButtonStyle: Record<string, unknown>
  buttonStyle: Record<string, unknown>
  disabledTextStyle: TextStyle
  pressedTextStyle: TextStyle
  textStyle: TextStyle
}

export interface Props extends PressableProps {
  title: string,
  onPress: () => void,
  customStyle?: (pressed: boolean) => ViewStyle,
  disabled?: boolean,
  rightComponent?: JSX.Element,
}

const Button = ({
  disabledButtonStyle,
  pressedButtonStyle,
  buttonStyle,
  disabledTextStyle,
  pressedTextStyle,
  textStyle,
  title,
  onPress,
  customStyle,
  disabled,
  rightComponent,
  testID,
}: BaseProps & Props) => {
  const [pressed, setPressed] = React.useState(false)

  const pressableStyle = useCallback((state: PressableStateCallbackType) => {
    let defaultStyle
    if (disabled) {
      defaultStyle = disabledButtonStyle
    } else if (state.pressed) {
      defaultStyle = pressedButtonStyle
    } else {
      defaultStyle = buttonStyle
    }
    if (customStyle) {
      return {
        ...defaultStyle,
        ...customStyle(state.pressed),
      }
    }
    return defaultStyle
  }, [customStyle, disabled])

  const calculateTextStyle = useMemo(() => {
    let defaultStyle
    if (disabled) {
      defaultStyle = disabledTextStyle
    } else if (pressed) {
      defaultStyle = pressedTextStyle
    } else {
      defaultStyle = textStyle
    }
    if (customStyle) {
      return {
        ...defaultStyle,
        ...customStyle(pressed),
      }
    }
    return defaultStyle
  }, [pressed, disabled, customStyle])

  return (
    <Pressable
      style={pressableStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      testID={testID}
    >
      <H3
        style={[
          styles.baseTextStyle,
          calculateTextStyle,
        ]}
        textAlign="center"
      >
        {title}
      </H3>
      {rightComponent}
    </Pressable>
  )
}

export default Button
