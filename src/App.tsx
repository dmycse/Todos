import { TodoApp } from "./components/todo_app";
import { TodosProvider } from "./data";
import { Wrapper } from "./ui/wrapper";


function App() {

  return (
    <TodosProvider>
      <Wrapper>
        <TodoApp />
      </Wrapper>
    </TodosProvider>
  )
}

export default App;
