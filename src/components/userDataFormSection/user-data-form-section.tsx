import React, { useContext, useState } from 'react'
import style from './user-data-form-section.module.scss'
import { UserContext } from '../../common/context/context'
import UserDataForm from './user-data-form'
import UserDataDisabledForm from './user-data-disabled-form'
import IconWithTooltip from '../../common/iconWithTooltip/icon-with-tooltip'
import informIcon from '../../images/main/editButtonIcon.svg'

function UserDataFormSection() {
  const user = useContext(UserContext)
  const [editProfile, setEditProfile] = useState(false)

  const setEditProfileHandler = () => {
    setEditProfile(!editProfile)
  }
  const userDataFormSubmit = () => {}
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
            style={{ backgroundImage: `url(${user.avatarUrl})` }}
          />
        </div>
        {editProfile && <UserDataForm formSubmit={userDataFormSubmit} />}
        {!editProfile && <UserDataDisabledForm />}
      </div>
    </div>
  )
}

export default UserDataFormSection
