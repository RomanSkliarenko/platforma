import React, { MouseEventHandler } from 'react'
import styles from './icon-with-tooltip.module.scss'
import { PropsInterface } from './icon-with-tooltip-interface'

const IconWithTooltip: React.FC<PropsInterface> = ({
  onClick,
  tooltipText,
  backgroundImage,
  customClassName
}) => {
  return (
    <div className={customClassName && customClassName}>
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
