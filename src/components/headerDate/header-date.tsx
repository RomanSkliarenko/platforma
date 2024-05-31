import React, { useEffect, useState } from 'react'
import style from '../../common/layout/layout-header.module.scss'

function HeaderDate() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: false
  })

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <div className={style.dateInfo}>
        <span>{formattedTime}</span>
        <span>{formattedDate}</span>
      </div>
    </>
  )
}

export default HeaderDate
