import PasswordInput from '@components/passwordInput/PasswordInput'
import { Body } from '@components/text'
import * as React from 'react'
import {
  useController, UseControllerProps, useFormContext,
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextInputProps as RNTextInputProps, View } from 'react-native'

import validations from '@/localization/en/validations'

import styles from './styles'

interface Props extends RNTextInputProps, UseControllerProps {
  label?: string,
  defaultValue?: string,
  showErrors?: boolean,
}

const PasswordInputFormField = ({
  label,
  name,
  rules,
  defaultValue,
  onChangeText,
  showErrors = true,
  ...inputProps
}: Props) => {
  const { t } = useTranslation('validations')
  const formContext = useFormContext()
  const { formState } = formContext

  const { field } = useController({
    name,
    rules,
    defaultValue,
  })

  const hasError = formState.errors[name] !== undefined

  return (
    <View style={styles.wrapper}>
      <PasswordInput
        {...inputProps}
        name={name}
        label={label}
        onBlur={field.onBlur}
        onChangeText={(text) => {
          field.onChange(text)
          if (onChangeText) {
            onChangeText(text)
          }
        }}
        value={field.value}
      />
      {hasError && showErrors && (
        <Body style={styles.errorMessage}>
          {t(formState.errors[name]?.message as keyof typeof validations)}
        </Body>
      )}
    </View>
  )
}

export default PasswordInputFormField
