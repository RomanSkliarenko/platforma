import React, { useRef, useState } from 'react'
import style from './accordion-section.module.scss'
import IconWithTooltip from '../../common/iconWithTooltip/icon-with-tooltip'
import informIcon from '../../images/main/editButtonIcon.svg'
import closeOpenAccordionIcon from '../../images/main/close-open-accordion.svg'
import { CSSTransition } from 'react-transition-group'
import { iconsPreview, iconsCertificate } from '../../common/main-icon-reexp'

function AccordionSection() {
  const accordionData = {
    accName: 'Certificates of completed courses',
    accData: [
      { id: '1', title: 'Management pro +' },
      { id: '2', title: 'Management' },
      { id: '3', title: 'Business' },
      { id: '4', title: 'Management pro +' },
      { id: '5', title: 'MBA Certificate to Bussiness Management' },
      { id: '6', title: 'Business +' },
      { id: '7', title: 'Management pro +' },
      { id: '8', title: 'Certificates of completed courses' }
    ]
  }
  const [isOpen, setIsOpen] = useState(false)
  const nodeRef = useRef(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={style.accordionSectionContainer}>
      <div className={style.sectionSettingsButtons}>
        <IconWithTooltip
          onClick={() => {}}
          backgroundImage={informIcon}
          customClassName={style.sharedInformButtonAccordionSection}
          tooltipText={
            'The average score is calculated based on all courses you have completed'
          }
        />
        <IconWithTooltip
          onClick={handleToggle}
          backgroundImage={closeOpenAccordionIcon}
          customClassName={style.sharedOpenButtonAccordionSection}
        />
      </div>
      <div className={style.accordionBase}>
        <p className={style.accordionItemTitle}>{accordionData.accName}</p>
        <CSSTransition
          classNames={style.contentWrapper}
          in={isOpen}
          nodeRef={nodeRef}
          timeout={900}
          unmountOnExit
        >
          <ul className={style.subItemList}>
            {accordionData.accData.map(item => (
              <li key={item.id} className={style.subItem}>
                <div className={style.subItemContentWrapper}>
                  {item.title}
                  <div className={style.subItemButtonsWrapper}>
                    <button>
                      Preview
                      <div
                        className={style.subItemButton}
                        style={{ backgroundImage: `url(${iconsPreview})` }}
                      />
                    </button>
                    <button>
                      Certificate
                      <div
                        className={style.subItemButton}
                        style={{ backgroundImage: `url(${iconsCertificate})` }}
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CSSTransition>
      </div>
    </div>
  )
}

export default AccordionSection
