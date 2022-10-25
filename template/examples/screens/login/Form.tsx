import LinkButton from '@components/linkButton'
import PasswordInputFormField from '@components/passwordInputFormField'
import PrimaryButton from '@components/primaryButton'
import { Body } from '@components/text'
import TextInputFormField from '@components/textInputFormField'
import { yupResolver } from '@hookform/resolvers/yup'
import Fields from '@schemas/Fields'
import { navigate } from '@stores/NavigationStore'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Roots } from '@/navigation'
import { Colors } from '@/theme'

import schema from './schema'

export type FormValues = {
  userName: string
  password: string
}

const initialValues = {
  [Fields.userName]: '',
  [Fields.password]: '',
}

type Props = {
  handleSubmit: (values: FormValues) => void
  submitErrors?: string[]
  setSubmitErrors?: Dispatch<SetStateAction<Array<string>>>
}

const Form = ({ handleSubmit, submitErrors, setSubmitErrors }: Props) => {
  const { t } = useTranslation(['common', 'login'])
  const methods = useForm<FormValues, symbol>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const { errors } = methods.formState
  const { watch } = methods

  useEffect(() => {
    const { unsubscribe } = watch(() => {
      setSubmitErrors?.([])
    })
    return () => unsubscribe()
  }, [watch])

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
      {
        submitErrors?.map((error) => (
          <Body key={error} color={Colors.error}>
            {error}
          </Body>
        ))
      }
      <PrimaryButton
        title={t('login:login')}
        disabled={hasErrors || (submitErrors && submitErrors.length > 0)}
        onPress={methods.handleSubmit(onSubmit)}
        testID="login-confirmation-button"
      />
      <View style={{ flexDirection: 'row' }}>
        <Body>
          {t('login:needAnAccount')}
          {'\u00A0'}
        </Body>
        <LinkButton
          title={t('common:signUp')}
          onPress={() => navigate(Roots.Register)}
        />
      </View>
    </FormProvider>
  )
}

export default Form
