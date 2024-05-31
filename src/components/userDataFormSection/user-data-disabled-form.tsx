import React, { useContext, useState } from 'react'
import { UserContext } from '../../common/context/context'
import style from './user-data-form-section.module.scss'

const UserDataDisabledForm: React.FC = () => {
  const [formData] = useState(useContext(UserContext))

  return (
    <form className={style.userDataForm}>
      <div className={style.userFormDataItem}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.userName}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          disabled={true}
        />
      </div>
      <div className={style.userFormDataItem}>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          disabled={true}
        />
      </div>
    </form>
  )
}

export default UserDataDisabledForm
