import React from 'react'
import styles from './icon-with-tooltip.module.scss'
import style from '../sidebarButton/sidebar-button.module.scss'

interface PropsInterface {
  onClick?: () => void
  tooltipText?: string
  backgroundImage: string
  customClassName?: string
}

const IconWithTooltip: React.FC<PropsInterface> = ({
  onClick,
  tooltipText,
  backgroundImage,
  customClassName
}) => {
  return (
    <div
      className={
        customClassName
          ? `${style.componentContainer} ${customClassName}`
          : style.componentContainer
      }
    >
      <button
        type="button"
        className={styles.sharedButton}
        onClick={onClick}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <span className={styles.editButtonTooltip}>{tooltipText}</span>
    </div>
  )
}

export default IconWithTooltip
