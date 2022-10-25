import Fields from '@schemas/Fields'
import * as yup from 'yup'

const schema = yup.object({
  [Fields.userName]: yup.string()
    .required('userNameRequired'),
  [Fields.password]: yup.string()
    .required('passwordRequired'),
})

export default schema
