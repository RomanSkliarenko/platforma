import React, { ReactNode } from 'react'
import LayoutHeader from './layout-header'
import LayoutSidebar from './layout-sidebar'
import style from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const MainContent: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.layoutContainer}>
      <LayoutHeader />
      <LayoutSidebar />
      <MainContent>{children}</MainContent>
    </div>
  )
}

export default Layout
