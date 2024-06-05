import { MouseEventHandler } from 'react'

export interface PropsInterface {
  onClick?: MouseEventHandler<HTMLButtonElement>
  tooltipText?: string
  backgroundImage: string
  customClassName?: string
}
