import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";


function App(props) {
  return (
    <div>
     <Counter />
     <hr/>
     <TaskForm />
     <hr/>
     <TodoList />
    </div>
  );
}

export default App;
