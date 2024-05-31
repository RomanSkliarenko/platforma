import React, { useContext } from 'react'
import style from './user-study-info-section.module.scss'

import { UserContext } from '../../common/context/context'

function UserStudyInfoSection() {
  const user = useContext(UserContext)
  return (
    <div className={style.itemsContainer}>
      {user.studyData!.map(item => (
        <div key={item.name} className={style.item}>
          <div
            className={style.itemIcon}
            style={{
              backgroundImage: `url(${item.icon})`
            }}
          />
          <div className={style.itemInfoContainer}>
            <span className={style.itemInfoCount}>{item.count}</span>
            <span className={style.itemInfoName}>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserStudyInfoSection
