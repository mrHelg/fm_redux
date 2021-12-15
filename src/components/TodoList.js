import React from 'react';
import { connect } from 'react-redux';
import * as TodoCreators from '../actions/todoCreators';

const TodoList = (props) => {
  const {tasks, updateTaskAction, deleteTaskAction } = props;
  
  return (
    <section>
      <h2>Todo</h2>
      <ol>
        {
          tasks.map((task)=>(
            <li key={task.id}>
              <p>{task.id}: {task.body} 
              <input type='checkbox' checked={task.isDone}
              onChange={({target:{checked}})=>{updateTaskAction({id:task.id, values:{isDone: checked}})}}/>
              <button onClick={()=>{deleteTaskAction(task.id)}}>Delete</button>
              </p>
            </li>
          ))
        }
      </ol>
    </section>
  );
}

const mapStateToProps = ({todo}) => todo;
const mapDispatchToProps = (dispatch) =>({
  updateTaskAction: ({id, values}) => dispatch(TodoCreators.updateTask({id, values})),
  deleteTaskAction: (id)=>dispatch(TodoCreators.deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
