import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles['button-container']} {...props} />
  )
}
