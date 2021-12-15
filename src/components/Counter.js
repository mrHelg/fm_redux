import {connect} from 'react-redux';
import * as ActionCreators from '../actions/counterCreators';

function Counter(props) {
  const {count, step, incrementAction, decrementAction, setStepAction} = props;
  const onChange = ({target:{value}})=>setStepAction(Number(value));
  return (
    <div>
     <h2>Count:{count}</h2>
     <button onClick={incrementAction}>+</button>
     <button onClick={decrementAction}>-</button>
     <input type='number' value={step} onChange={onChange}/>
    </div>
  );
}

const mapStateToProps = ({count, step}) => ({count, step})
const mapDispatchToProps = (dispatch) => ({
  incrementAction: ()=> dispatch(ActionCreators.increment()),
  decrementAction: ()=>dispatch(ActionCreators.decrement()),
  setStepAction: (newStep)=>dispatch(ActionCreators.setStep(newStep)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);