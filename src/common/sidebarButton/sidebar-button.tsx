import React, { MouseEventHandler } from 'react'
import style from './sidebar-button.module.scss'
interface ImageButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  backgroundImage: string
  customClassName?: string
}

const SidebarButton: React.FC<ImageButtonProps> = ({
  onClick,
  backgroundImage,
  customClassName
}) => {
  return (
    <button
      className={
        customClassName
          ? `${style.sidebarMenuOptionsButton} ${customClassName}`
          : style.sidebarMenuOptionsButton
      }
      onClick={onClick}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    />
  )
}

export default SidebarButton
