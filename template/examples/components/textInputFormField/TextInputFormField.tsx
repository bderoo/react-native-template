import { Body } from '@components/text'
import TextInput from '@components/textInput'
import React from 'react'
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
  required?: boolean,
}

const ControlledInput = ({
  label,
  name,
  rules,
  defaultValue,
  ...inputProps
}: Props) => {
  const formContext = useFormContext()
  const { formState } = formContext
  const { t } = useTranslation('validations')

  const { field } = useController({
    name,
    rules,
    defaultValue,
  })

  const fieldError = formState.errors[name]?.message

  return (
    <View style={styles.wrapper}>
      <TextInput
        {...inputProps}
        label={label}
        onChangeText={field.onChange}
        name={name}
        onBlur={field.onBlur}
        value={field.value}
      />
      {fieldError && (
        <Body
          style={styles.errorMessage}
          testID={`${name}-error`}
        >
          {t(fieldError as keyof typeof validations)}
        </Body>
      )}
    </View>
  )
}

const TextInputFormField = (props: Props) => (
  <ControlledInput {...props} />
)

export default TextInputFormField
