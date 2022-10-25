import LinkButton from '@components/linkButton'
import PasswordInputFormField from '@components/passwordInputFormField'
import PrimaryButton from '@components/primaryButton'
import { Body } from '@components/text'
import TextInputFormField from '@components/textInputFormField'
import { yupResolver } from '@hookform/resolvers/yup'
import Fields from '@schemas/Fields'
import { navigate } from '@stores/NavigationStore'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Roots } from '@/navigation'

import schema from './schema'

export type FormValues = {
  userName: string
  password: string
  confirmPassword: string
}

const initialValues = {
  [Fields.userName]: '',
  [Fields.password]: '',
  [Fields.confirmPassword]: '',
}

type Props = {
  handleSubmit: (values: FormValues) => void
}

const Form = ({ handleSubmit }: Props) => {
  const { t } = useTranslation(['common', 'register'])
  const methods = useForm<FormValues, symbol>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const { errors } = methods.formState

  const onSubmit = (data: FormValues) => {
    handleSubmit(data)
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <FormProvider {...methods}>
      <TextInputFormField
        label={t('common:username')}
        name={Fields.userName}
      />
      <PasswordInputFormField
        label={t('common:password')}
        name={Fields.password}
      />
      <PasswordInputFormField
        label={t('common:confirmPassword')}
        name={Fields.confirmPassword}
      />
      <PrimaryButton
        title={t('common:register')}
        disabled={hasErrors}
        onPress={methods.handleSubmit(onSubmit)}
        testID="login-confirmation-button"
      />
      <View style={{ flexDirection: 'row' }}>
        <Body>
          {t('register:alreadyHaveAnAccountQuestion')}
          {'\u00A0'}
        </Body>
        <LinkButton
          title={t('common:login')}
          onPress={() => navigate(Roots.Login)}
        />
      </View>
    </FormProvider>
  )
}

export default Form
