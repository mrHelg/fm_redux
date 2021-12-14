import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const initialState = {count:0};
function reducer(state=initialState, action){
  switch(action.type){
    case 'INCREMENT':{
      return {
        count:state.count+1
      }
    }
    case 'DECREMENT':{
      return {
        count:state.count-1
      }
    }
    default:
      return state;
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);