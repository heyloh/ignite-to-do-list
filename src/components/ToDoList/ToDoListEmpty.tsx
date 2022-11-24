import clipboardIcon from '../../assets/clipboard-icon.svg'

import styles from './ToDoList.module.css'

export const ToDoListEmpty = () => {
  const className = `${styles['todo-list']} ${styles['todo-list--empty']}`
  return (
    <div className={className}>
      <img src={clipboardIcon} alt="" />
      <p><b>Você ainda não tem tarefas cadastradas</b><br />
      Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
