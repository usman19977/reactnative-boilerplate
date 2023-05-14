import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_FAILED,
} from './Constants';
/**
 * Initial state for this slice of store
 */
const initialState = {
  loading: false,
  error: null,
  data: {},
};
/**
 * @author Usman Bashir
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
