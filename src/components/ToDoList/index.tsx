import { useContext } from 'react'

import { ToDosContext } from '../../contexts/ToDoContext'

import { CountIndicator } from '../CountIndicator'
import { ToDoListEmpty } from './ToDoListEmpty'
import { ToDoList } from './ToDoList'

import styles from './ToDoList.module.css'

export const ToDoListContainer = () => {
  const { totalItems, totalFinishedItems } = useContext(ToDosContext)

  const hasAnyItems = !!totalItems
  const countFinishedItems = hasAnyItems ? `${totalFinishedItems} de ${totalItems}` : '0'

  return (
    <section className={styles['todo-list-container']}>
      <header className={styles['todo-list-header']}>
        <CountIndicator
          label="Tarefas criadas"
          count={`${totalItems}`}
          color="blue"
        />
        <CountIndicator
          label="Concluídas"
          count={countFinishedItems}
        />
      </header>
      { hasAnyItems ? (
        <ToDoList />
      ) : (
        <ToDoListEmpty />
      )}
    </section>
  )
}
