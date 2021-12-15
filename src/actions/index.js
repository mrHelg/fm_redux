import ACTION_TYPES from "./actionTypes";

export const increment = ()=>{
  return {type:ACTION_TYPES.INCREMENT};
}

export const decrement = ()=>{
  return {type:ACTION_TYPES.DECREMENT};
}

export const setStep = (value)=>{
  return {
    type:ACTION_TYPES.SET_STEP,
    newStep: value
  };
}

