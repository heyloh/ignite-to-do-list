import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { ToDosProvider } from "./contexts/ToDoContext";

function App() {
  return (
    <>
      <Header />
      <ToDosProvider>
        <Main />
      </ToDosProvider>
    </>
  )
}

export default App
