import React, { useContext, useState } from 'react'
import style from './user-data-form-section.module.scss'
import { UserContext } from '../../common/context/context'
import IconWithTooltip from '../../common/iconWithTooltip/icon-with-tooltip'
import informIcon from '../../images/main/editButtonIcon.svg'
import { formFields } from '../../common/form-fields'
import FormInput from './data-form-shared-item'
import { UserData } from './user-data-form-types'
import { SubmitHandler, useForm } from 'react-hook-form'

function UserDataFormSection() {
  const [formData] = useState(useContext(UserContext))
  const [editProfile, setEditProfile] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserData>()

  const setEditProfileHandler = () => {
    setEditProfile(!editProfile)
  }

  const onSubmit: SubmitHandler<UserData> = data => {
    setEditProfile(!editProfile)
    console.log(data)
  }

  return (
    <div className={style.mainPageContainer}>
      <div className={style.userProfileSection}>
        <IconWithTooltip
          onClick={setEditProfileHandler}
          backgroundImage={informIcon}
          tooltipText={'Edit profile'}
          customClassName={style.sharedInformButtonFormSection}
        />
        <div className={style.userAvatarContainer}>
          <div
            className={style.userAvatar}
            style={{ backgroundImage: `url(${formData.avatarUrl})` }}
          />
        </div>
        <form className={style.userDataForm} onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(({ id, type, name, label }) => (
            <FormInput
              key={id}
              disabled={editProfile}
              type={type}
              id={id}
              name={name}
              label={label}
              value={formData[name as keyof UserData]!}
              register={register}
              errors={errors}
            />
          ))}
          {editProfile && (
            <button className={style.userFormSubmitButton} type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default UserDataFormSection
