import {POST_REQUEST, POST_FAILED, POST_SUCCESS} from './Constants';
/**
 * Initial state for this slice of store
 */
const initialState = {
  loading: false,
  error: null,
  data: null,
};
/**
 * @author Usman Bashir
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case POST_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
