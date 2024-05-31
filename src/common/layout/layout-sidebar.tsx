import React, { useContext, useEffect, useRef, useState } from 'react'
import style from './layout-sidebar.module.scss'
import SidebarButton from '../sidebarButton/sidebar-button'
import {
  homeImg,
  aboutImg,
  coursesImg,
  instructionsImg,
  profileImg,
  supportManager,
  logout,
  pin,
  pinBlack
} from '../sidebar-icon-reexp'
import { UserContext } from '../context/context'

function LayoutSidebar() {
  const [isRightSidebarUnpin, setIsRightUnpin] = useState<boolean>(false)
  const [isLeftSidebarUnpin, setIsLeftUnpin] = useState<boolean>(false)

  const user = useContext(UserContext)

  const sidebarRightContainer = useRef<HTMLDivElement>(null)
  const sidebarLeftContainer = useRef<HTMLDivElement>(null)
  const sidebarContainer = useRef<HTMLDivElement>(null)

  const handleSidebarButtonClick = () => {
    console.log('handleSidebarButtonClick')
  }
  const handlePinLeftSidebarMenu = () => {
    if (!isLeftSidebarUnpin && isRightSidebarUnpin) {
      setIsLeftUnpin(!isLeftSidebarUnpin)
      sidebarRightContainer.current!.classList.add(style.hidden)
      pinSidebar()
    }

    if (isLeftSidebarUnpin && isRightSidebarUnpin) {
      sidebarRightContainer.current!.classList.remove(style.hidden)
      unPinSidebar()
      setIsLeftUnpin(!isLeftSidebarUnpin)
    }
  }

  const handleUnpinRightSidebarMenu = () => {
    setIsRightUnpin(!isRightSidebarUnpin)
    isRightSidebarUnpin && pinSidebar()
  }

  const mouseenterEvent = (e: MouseEvent) => {
    sidebarRightContainer.current!.classList.remove(style.hidden)
  }

  const mouseleaveEvent = (e: MouseEvent) => {
    sidebarRightContainer.current!.classList.add(style.hidden)
  }

  const pinSidebar = () => {
    sidebarContainer.current!.removeEventListener('mouseenter', mouseenterEvent)
    sidebarContainer.current!.removeEventListener('mouseleave', mouseleaveEvent)
    console.log('убрали слушатели')
  }

  const unPinSidebar = () => {
    sidebarContainer.current!.addEventListener('mouseenter', mouseenterEvent)
    sidebarContainer.current!.addEventListener('mouseleave', mouseleaveEvent)
    console.log('добавили слушатели')
  }

  useEffect(() => {
    isRightSidebarUnpin && !isLeftSidebarUnpin && unPinSidebar()
  }, [isLeftSidebarUnpin, isRightSidebarUnpin])

  return (
    <div ref={sidebarContainer} className={style.sidebarContainer}>
      <div ref={sidebarLeftContainer} className={style.sidebarLeftSide}>
        <div className={style.pinSection}>
          <SidebarButton
            onClick={handlePinLeftSidebarMenu}
            backgroundImage={pin}
          />
          <div className={style.pinSectionText} />
        </div>
        <ul className={style.sidebarMenuOptions}>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={homeImg}
            />
          </li>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={aboutImg}
            />
          </li>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={coursesImg}
            />
          </li>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={instructionsImg}
            />
          </li>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={profileImg}
            />
          </li>
        </ul>
        <ul className={style.logout}>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={supportManager}
            />
          </li>
          <li>
            <SidebarButton
              onClick={handleSidebarButtonClick}
              backgroundImage={logout}
            />
          </li>
        </ul>
      </div>
      <div ref={sidebarRightContainer} className={style.sidebarRightSide}>
        <div className={style.sidebarUserInfo}>
          <div className={style.rightSideUnpinButtonContainer}>
            <SidebarButton
              onClick={handleUnpinRightSidebarMenu}
              backgroundImage={pinBlack}
            />
          </div>
          <div
            className={style.userAvatar}
            style={{ backgroundImage: `url(${user.avatarUrl})` }}
          ></div>
          <div className={style.userName}>Sam James</div>
          <div className={style.userCourseInfo}>
            <div className={style.coursCount}>4 cours</div>
            <div className={style.divideLine} />
            <div className={style.certificateCount}>1 certificat</div>
          </div>
        </div>
        <ul className={style.sidebarRightSideNavigationList}>
          <li className={style.sidebarRightSideNavigationItem}>
            Home
            {/*<SidebarButton*/}
            {/*  onClick={handleSidebarButtonClick}*/}
            {/*  backgroundImage={homeImg}*/}
            {/*  customClassName={style.hover}*/}
            {/*/>*/}
          </li>
          <li className={style.sidebarRightSideNavigationItem}>Courses</li>
          <li className={style.sidebarRightSideNavigationItem}>My proffile</li>
          <li className={style.sidebarRightSideNavigationItem}>About IEU</li>
          <li className={style.sidebarRightSideNavigationItem}>Instructions</li>
        </ul>
        <div className={style.sidebarRightSideLogoutMenu}>
          <div className={style.supportManagerText}>Support manager</div>
          <div className={style.logoutMenu}>
            <div className={style.logoutMenuImage} />
            <div className={style.logoutMenuText}>Log out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutSidebar
