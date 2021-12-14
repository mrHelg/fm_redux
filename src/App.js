import {connect} from 'react-redux';
import * as ActionCreators from './actions';

function App(props) {
  const {count,step, dispatch} = props;
  const increment = ()=> dispatch(ActionCreators.increment());
  const decrement = ()=>dispatch(ActionCreators.decrement());
  const onChange = ({target:{value}})=>dispatch(ActionCreators.setStep(Number(value)));
  return (
    <div>
     <h2>Count:{count}</h2>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <input type='number' value={step} onChange={onChange}/>
    </div>
  );
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
