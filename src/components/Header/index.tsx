import toDoLogo from '../../assets/to-do-logo.svg'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles['header-container']}>
      <img src={toDoLogo} alt="To-do" />
    </header>
  )
}
