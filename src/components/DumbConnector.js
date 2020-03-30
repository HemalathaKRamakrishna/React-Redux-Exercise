import { connect } from "react-redux";
import { Dumb } from "./Dumb";

import { incrementAction } from "../actions/counterActions";
import { decrementAction } from "../actions/counterActions";

/*
const store = {
  counter: {
    counter: 0
  }
}
*/

const mapStateToProps = store => {
  //console.log(store);
  return {
    counter: store.counter.counter,
    displayCounterStatus: store.counter.displayCounterStatus
  };
};

const mapDisptachToProps = dispatch => ({
  increment: value => dispatch(incrementAction(value)),
  decrement: value => dispatch(decrementAction(value))
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Dumb);

/*
Dumb({
  counter: store.counter.counter
});
*/
