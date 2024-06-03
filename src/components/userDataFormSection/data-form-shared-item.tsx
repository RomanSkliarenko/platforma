import React, { useState } from 'react'
import style from './user-data-form-section.module.scss'
import { FormInputProps } from './user-data-form-types'

const FormInput: React.FC<FormInputProps> = ({
  type,
  id,
  name,
  label,
  value,
  disabled,
  register,
  errors
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <label className={style.userFormDataItem} htmlFor={id}>
      <span>
        {label}:
        {errors[name] && (
          <span className={style.errorText}> {errors[name]?.message}</span>
        )}
      </span>
      <input
        disabled={!disabled}
        type={type === 'password' && passwordVisible ? 'text' : type}
        id={id}
        {...register(name, {
          pattern:
            name === 'email'
              ? {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter valid email'
                }
              : name === 'password'
                ? {
                    value: /.{4,}/,
                    message: 'Password too short' //знаю что можно сделать minLength, просто проверял как делать проверки по соотвествию имени инпута.
                  }
                : undefined,

          value,
          required: 'This field is required',
          minLength: {
            value: 2,
            message: 'Too short :('
          }
        })}
      />
      {type === 'password' && disabled && (
        <button
          type="button"
          className={style.visiblePasswordButton}
          onClick={togglePasswordVisibility}
        />
      )}
    </label>
  )
}

export default FormInput
