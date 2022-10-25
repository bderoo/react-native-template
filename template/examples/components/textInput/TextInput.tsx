import { format, parse } from 'date-fns'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { UseControllerProps } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps, View,
} from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import SvgIcon from '@/components/svgIcon/SvgIcon'
import { LabelText } from '@/components/text'
import { Icons } from '@/constants/images'
import { Colors, Metrics } from '@/theme'

import styles from './styles'

export interface Props extends RNTextInputProps, UseControllerProps {
  label?: string,
  defaultValue?: string,
  rightIcon?: ValueOf<typeof Icons>,
  leftIcon?: ValueOf<typeof Icons>,
  rightIconPress?: () => void,
  mask?: string,
  required?: boolean,
}

const TextInput = (props: Props) => {
  const {
    label,
    rightIcon,
    leftIcon,
    rightIconPress,
    mask,
    value,
    required,
    name,
  } = props

  const { t } = useTranslation('common')
  const [renderedText, setRenderedText] = useState(value)

  useEffect(() => {
    if (value && mask === 'datetime') {
      if (value.length === 10) {
        const aux = parse(value, 'yyyy-MM-dd', new Date())
        const newValue = format(aux, 'MM-dd-yyyy')
        setRenderedText(newValue)
      } else {
        setRenderedText(value)
      }
    } else {
      setRenderedText('')
    }
  }, [value])

  const renderInput = useMemo(() => {
    if (mask && mask === 'datetime') {
      return (
        <TextInputMask
          type="datetime"
          options={{
            format: t('dateMask'),
          }}
          style={styles.input}
          placeholderTextColor={Colors.accentGray3}
          {...props}
          value={renderedText}
        />
      )
    }
    return (
      <RNTextInput
        style={styles.input}
        placeholderTextColor={Colors.accentGray3}
        {...props}
      />
    )
  }, [props])

  return (
    <View
      testID={`text-input-${name}`}
    >
      {label && (
        <View style={styles.horizontal}>
          <LabelText style={styles.label}>{label}</LabelText>
          {required && <LabelText style={styles.required}>*</LabelText>}
        </View>
      )}
      <View style={styles.wrap}>
        {leftIcon && (
          <View style={styles.leftIcon}>
            <SvgIcon
              image={leftIcon}
              height={Metrics.iconHeight}
              width={Metrics.iconHeight}
            />
          </View>
        )}
        {renderInput}
        {rightIcon && (
          <Pressable onPress={rightIconPress}>
            <SvgIcon
              image={rightIcon}
              height={Metrics.iconHeight}
              width={Metrics.iconHeight}
            />
          </Pressable>
        )}
      </View>
    </View>
  )
}

export default TextInput
