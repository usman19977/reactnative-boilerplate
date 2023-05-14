import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './Constants';
/**
 * @author Usman Bashir
 * @function loginRequest
 * @param {*} payload
 * @description Return type for login request to reducer
 * @returns state
 */
export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

/**
 * @author Usman Bashir
 * @function loginSuccess
 * @param {*} payload
 * @description Return type for login success to reducer
 * @returns state
 */
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * @author Usman Bashir
 * @function loginError
 * @param {*} payload
 * @description Return type for login failed to reducer
 * @returns state
 */
export const loginError = payload => ({
  type: LOGIN_FAILED,
  payload,
});

/**
 * @author Usman Bashir
 * @function logoutRequest
 * @param {*} payload
 * @description Return type for logout request to reducer
 * @returns state
 */
export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload,
});

/**
 * @author Usman Bashir
 * @function logoutSuccess
 * @param {*} payload
 * @description Return type for logout success to reducer
 * @returns state
 */
export const logoutSuccess = payload => ({
  type: LOGOUT_SUCCESS,
  payload,
});

/**
 * @author Usman Bashir
 * @function logoutError
 * @param {*} payload
 * @description Return type for logout failed to reducer
 * @returns state
 */
export const logoutError = payload => ({
  type: LOGOUT_FAILED,
  payload,
});
