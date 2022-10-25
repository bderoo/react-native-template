import Fields from '@schemas/Fields'
import * as yup from 'yup'

const schema = yup.object({
  [Fields.userName]: yup.string()
    .required('userNameRequired'),
  [Fields.password]: yup.string()
    .required('passwordRequired')
    .min(10, 'passwordTooShort')
    .matches(/\d/, 'passwordMustContainNumber')
    .matches(/[a-z]/, 'passwordMustContainLowerCase')
    .matches(/[A-Z]/, 'passwordMustContainUpperCase')
    .matches(
      /[!@#$%^&*()_+\-=]/,
      'passwordMustContainSpecialCharacter',
    ),
  [Fields.confirmPassword]: yup.string()
    .required('confirmPasswordRequired')
    .oneOf(
      [yup.ref(Fields.password), null],
      'passwordsMustMatch',
    ),
})

export default schema
