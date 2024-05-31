import clsx from 'clsx'
import React, { memo, useEffect, useState, useRef } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Accordion.scss'
import style from './accordion-section.module.scss'
import IconWithTooltip from '../../common/iconWithTooltip/icon-with-tooltip'
import informIcon from '../../images/main/editButtonIcon.svg'
import closeOpenAccordionIcon from '../../images/main/close-open-accordion.svg'

type TProps = {
  className?: string
  dataTestId?: string
  isActive?: boolean
  title?: string
} & PropsWithChildren

const AccordionComponent: FC<TProps> = ({
  className,
  dataTestId = 'uikit__accordion',
  isActive = false,
  title = '',
  children = null
}) => {
  const [isOpen, setIsOpen] = useState(isActive)
  const nodeRef = useRef<HTMLDivElement>(null)
  const contentHeight = nodeRef.current?.scrollHeight

  const handleToggleAccordion = () => {
    setIsOpen((prev?: boolean) => !prev)
  }

  const setAtToStringAndPx = (value: number): string => {
    return value.toString() + 'px'
  }

  useEffect(() => {
    if (nodeRef.current && contentHeight) {
      nodeRef.current.style.setProperty(
        '--content-height',
        setAtToStringAndPx(contentHeight)
      )
    }
  }, [contentHeight])

  // ===============================================================
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
  // ===============================================================

  return (
    <div
      className={clsx('Accordion', {
        Accordion__active: isOpen
      })}
    >
      <div className="Accordion-Header">
        <div className="Accordion-HeaderTitle" onClick={handleToggleAccordion}>
          {accordionData.accName}
        </div>
      </div>

      <CSSTransition
        classNames="Accordion-ContentWrapper"
        in={isOpen}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <div className="Accordion-Content">
            {accordionData.accData.map(item => (
              <li key={item.id} className={style.subItem}>
                {item.title}
              </li>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export const Accordion = memo(AccordionComponent)
