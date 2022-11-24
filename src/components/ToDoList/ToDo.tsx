import { useContext, useState } from "react"

import { ToDosContext } from "../../contexts/ToDoContext"

import checkActiveIcon from '../../assets/check-active-icon.svg'
import checkInactiveIcon from '../../assets/check-inactive-icon.svg'
import trashInactiveIcon from '../../assets/trash-inactive-icon.svg'
import trashActiveIcon from '../../assets/trash-active-icon.svg'

import styles from './ToDoList.module.css'

interface ToDoProps {
  id: string
  title: string
  finished: boolean
}

export const ToDo = ({ id, title, finished }: ToDoProps) => {
  const { toggleItemAsFinished, deleteItem } = useContext(ToDosContext)

  const [trash, setTrash] = useState(trashInactiveIcon)

  const inactiveTrash = () => {
    setTrash(trashInactiveIcon)
  }

  const activeTrash = () => {
    setTrash(trashActiveIcon)
  }

  const handleDeleteItem = () => {
    deleteItem(id)
  }

  const handleToggleItemAsFinished = () => {
    toggleItemAsFinished(id)
  }

  return (
    <li className={styles['todo-list-item']}>
      <button onClick={handleToggleItemAsFinished} className={styles['todo-list-item__button-ghost']}>
        <img
          src={finished ? checkActiveIcon : checkInactiveIcon}
          width={24}
          height={24}
          alt=""
        />
      </button>
      <p
        className={styles[`todo-list-item__title${finished && '--finished'}`]}
      >
        {title}
      </p>
      <button
        className={styles['todo-list-item__button-ghost']}
        onClick={handleDeleteItem}
        onMouseOver={activeTrash}
        onMouseOut={inactiveTrash}
      >
        <img src={trash} alt="" />
      </button>
    </li>
  )
}
