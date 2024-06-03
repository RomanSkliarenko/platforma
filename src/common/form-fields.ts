export interface FormField {
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
}
export const formFields: FormField[] = [
  { type: 'text', id: 'userName', name: 'userName', label: 'Username' },
  { type: 'text', id: 'firstName', name: 'firstName', label: 'First Name' },
  { type: 'text', id: 'lastName', name: 'lastName', label: 'Last Name' },
  { type: 'email', id: 'email', name: 'email', label: 'Email' },
  { type: 'password', id: 'password', name: 'password', label: 'Password' },
  {
    type: 'tel',
    id: 'phoneNumber',
    name: 'phoneNumber',
    label: 'Phone Number'
  },
  { type: 'text', id: 'country', name: 'country', label: 'Country' }
]
