import * as yup from 'yup'

export const userNameSchema = yup.string().min(3).max(20).required()

export const passwordSchema = yup.string().min(10)
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])\S{8,}$/)
