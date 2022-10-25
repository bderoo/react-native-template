import * as React from 'react'

import TextInput, { Props as TextInputProps }
  from '@/components/textInput/TextInput'
import { Icons } from '@/constants/images'

const PasswordInput = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <TextInput
      rightIcon={showPassword ? Icons.crossedEye : Icons.eye}
      rightIconPress={() => setShowPassword(!showPassword)}
      secureTextEntry={!showPassword}
      {...props}
    />
  )
}

export default PasswordInput
