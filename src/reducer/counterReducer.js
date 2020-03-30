import { INCREMENT } from "../actionTypes";
import { DECREMENT } from "../actionTypes";

const defaultState = {
  counter: 0,
  displayCounterStatus: "counter default value"
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      const newCounter = state.counter + action.payload;
      const newState = {
        ...state,
        ...{
          counter: newCounter,
          displayCounterStatus: onDisplayCounterStatus(newCounter)
        }
      };
      return newState;

    case DECREMENT:
      const newCounter1 = state.counter - action.payload;
      return {
        ...state,
        ...{
          counter: newCounter1,
          displayCounterStatus: onDisplayCounterStatus(newCounter1)
        }
      };
    default:
      return state;
  }
};

const onDisplayCounterStatus = counter => {
  let displayText = "";
  //console.log(counter);
  if (counter < 0) {
    displayText = "You are in the negative numbers";
  } else if (counter <= 9) {
    displayText = "You are in the single digits";
  } else if (counter <= 19) {
    displayText = "You are in the tens";
  } else if (counter <= 29) {
    displayText = "You are in the twenties";
  } else if (counter >= 30) {
    displayText = "You have clicked this more than you need to";
  } else {
    displayText = "You should never see this text";
  }

  return displayText;
};

export { counterReducer };
