import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface UserData {
  userName: string
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  country: string
}

export interface UserDataFormProps {
  formSubmit: (formData: UserData) => void
  edit: boolean
}

export interface FormInputProps {
  type: string
  id: string
  name:
    | 'userName'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'phoneNumber'
    | 'country'
  label: string
  value: string
  disabled: boolean
  register: UseFormRegister<UserData>
  errors: FieldErrors<UserData>
}
