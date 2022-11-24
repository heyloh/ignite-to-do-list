import { FormEvent, useContext, useState } from "react"

import { Button } from "../Button"
import { Input } from "../Input"
import { ToDosContext } from "../../contexts/ToDoContext"

import plusIcon from '../../assets/plus-icon.svg'

import styles from './CreateToDoForm.module.css'

export const CreateToDoForm = () => {
  const { createItem } = useContext(ToDosContext)
  const [newItemTitle, setNewItemTitle] = useState('')

  const handleSubmitCreateToDoForm = (event: FormEvent) => {
    event.preventDefault()
    createItem(newItemTitle)
    setNewItemTitle('')
  }

  return (
    <form
      onSubmit={handleSubmitCreateToDoForm}
      className={styles['create-todo-form-container']}
    >
      <Input
        value={newItemTitle}
        onChange={e => setNewItemTitle(e.target.value)}
        type="text"
        id="new-todo-title"
        name="new-todo-title"
        placeholder="Adicione uma nova tarefa"
      />
      <Button type="submit">
        Criar{' '}
        <img src={plusIcon} alt="" width={16} height={19}/>
      </Button>
    </form>
  )
}
