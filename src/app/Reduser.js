import { ACTIONS } from './ActionCreator';

const initialState = {
  fuga: 1,
};

const Reducer = (state = initialState, action) => {
  console.log('reduce', action, state);
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ACTIONS.FUGA:
      newState.fuga++;
      break;
  }
  return newState;
}

export default Reducer;