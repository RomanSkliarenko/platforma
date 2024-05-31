import React, { useContext } from 'react'
import style from './layout-header.module.scss'
import { UserContext } from '../context/context'
import HeaderDate from '../../components/headerDate/header-date'

const LayoutHeader = () => {
  const user = useContext(UserContext)
  console.log('header')
  return (
    <div className={style.headerContainer}>
      <div className={style.logo}></div>
      <div className={style.headerMenu}>
        <button type="button" className={style.prevButton}>
          <div className={style.prevButtonArrow} /> Prev
        </button>
        <HeaderDate />
        <div className={style.userNotification}>
          <button type="button" className={style.notificationButton} />
          <div className={style.userShortInfo}>
            <div
              className={style.userAvatar}
              style={{ backgroundImage: `url(${user.avatarUrl})` }}
            />
            <div className={style.userName}>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>
        <div className={style.userBalance}>
          $ {user.balance} <div className={style.basket} />
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader
