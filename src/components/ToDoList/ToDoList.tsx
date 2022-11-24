import { useContext } from 'react'
import { ToDosContext } from '../../contexts/ToDoContext'
import { ToDo } from './ToDo'
import styles from './ToDoList.module.css'

export const ToDoList = () => {
  const { items } = useContext(ToDosContext)

  return (
    <ul className={styles['todo-list']}>
      {items.map(item => <ToDo key={item.id} {...item} />)}
    </ul>
  )
}
