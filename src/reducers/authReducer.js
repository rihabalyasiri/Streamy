import {SIGN_IN, SIGN_OUT} from '../actions/types';  //to avoid writing wrong names in case below

//initial state
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

//updating state
export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId:action.payload };
    case SIGN_OUT:
      return { ...state, isSignedOut: true, userId:null };
    default:
      return state;
  }
};
