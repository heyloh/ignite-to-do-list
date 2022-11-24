import { CreateToDoForm } from '../CreateToDoForm'
import { ToDoListContainer } from '../ToDoList'

import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles['main-container']}>
      <CreateToDoForm />
      <ToDoListContainer />
    </main>
  )
}
