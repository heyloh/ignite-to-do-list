import { createContext, PropsWithChildren, useState } from "react";

interface ToDo {
  id: string
  title: string
  finished: boolean
}

interface ToDosContextProps {
  items: ToDo[]
  createItem: (title: string) => void
  deleteItem: (id: string) => void
  toggleItemAsFinished: (id: string) => void
  totalItems: number
  totalFinishedItems: number
}

const initialContextValue: ToDosContextProps = {
  items: [],
  createItem: () => {},
  deleteItem: () => {},
  toggleItemAsFinished: () => {},
  totalItems: 0,
  totalFinishedItems: 0,
}

export const ToDosContext = createContext<ToDosContextProps>(initialContextValue)

export const ToDosProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<ToDo[]>([])
  const finishedItems = items.filter((todo) => !!todo.finished)

  const totalItems = items.length
  const totalFinishedItems = finishedItems.length

  const generateNewId = () => {
    return `to-do-${Date.now()}`
  }

  const createItem = (title: string) => {
    const newItem = {
      id: generateNewId(),
      title,
      finished: false
    }
    setItems(
      (oldItems) => [...oldItems, newItem]
    )
  }

  const deleteItem = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(filteredItems)
  }

  const toggleItemAsFinished = (id: string) => {
    const item = items.find(item => item.id === id)
    if(!item) return
    item.finished = !item.finished
    const filteredItems = items.filter((item) => item.id !== id)
    setItems([...filteredItems, item])
  }

  return (
    <ToDosContext.Provider value={{
      items,
      createItem,
      deleteItem,
      toggleItemAsFinished,
      totalItems,
      totalFinishedItems,
    }}>
      {children}
    </ToDosContext.Provider>
  )
}
