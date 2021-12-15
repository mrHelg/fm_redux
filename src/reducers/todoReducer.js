import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  tasks:[{
    id:0,
    body:'test',
    isDone:false,
  }],
};
let serial = 1;
function todoReducer(state=initialState, action){
  switch(action.type){
    case ACTION_TYPES.CREATE_TASK:{
      const {values} = action;
      const {tasks} = state;
      return {
        ...state,
        tasks: [...tasks, {...values, id:serial++} ]
      }
    }
    case ACTION_TYPES.UPDATE_TASK:{
      const {id, values} = action;
      const {tasks} = state;
      const newTasks  = tasks.map(task=>{
        if(task.id===id){
          return {...task, ...values};
        }
        return {...task}
      })
      return {
        ...state,
        tasks: newTasks
      }
    }
    case ACTION_TYPES.DELETE_TASK:{
      const {id} = action;
      const {tasks} = state;
      const newTasks = tasks.filter(task=>task.id!==id);
      return {
        ...state,
        tasks: newTasks
      }
    }
    
    default:
      return state;
  }
}

export default todoReducer;