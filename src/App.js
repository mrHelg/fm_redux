import UserForm from './components/UserForm';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import UsersList from './components/UsersList';

function App(props) {
  return (
    <div>
      <UserForm />
      <hr />
      <UsersList />
      <hr />
      <Counter />
      <hr />
      <TaskForm />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
