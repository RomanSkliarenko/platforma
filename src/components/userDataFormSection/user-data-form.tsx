import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../common/context/context'
import style from './user-data-form-section.module.scss'

export interface UserData {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  country: string
}
interface UserDataFormProps {
  formSubmit: (formData: UserData) => void
}

const UserDataForm: React.FC<UserDataFormProps> = ({ formSubmit }) => {
  const [formData, setFormData] = useState(useContext(UserContext))
  const [passwordVisible, setPasswordVisible] = useState(false)
  const passwordVisibleInput = useRef<HTMLInputElement>(null)
  const passwordVisibleButtonHandler = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // onSubmit(formData)
  }

  return (
    <form className={style.userDataForm} onSubmit={handleSubmit}>
      <div className={style.userFormDataItem}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordVisibleInput}
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          className={style.visiblePasswordButton}
          onClick={passwordVisibleButtonHandler}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <button className={style.userFormSubmitButton} type="submit">
        Submit
      </button>
    </form>
  )
}

export default UserDataForm
