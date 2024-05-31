import React from 'react'
import style from './main-content.module.scss'
import UserDataFormSection from '../userDataFormSection/user-data-form-section'
import ProgressSection from '../progressSection/progress-section'
import UserStudyInfoSection from '../userStudyInfoSection/user-study-info-section'
import AccordionSection from '../accordionSection/accordion-section'

function MainContent() {
  return (
    <div className={style.mainContentContainer}>
      <div className={style.mainContent}>
        <UserDataFormSection />
        <UserStudyInfoSection />
        <AccordionSection />
      </div>
      <ProgressSection />
    </div>
  )
}

export default MainContent
