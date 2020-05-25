import moment from 'moment';

export const DUCK_NAME = 'auth';

export const INITIAL_STATE = { 
  lastUpdateDateTime: null,
  loading: false,
  success: false,
  userFound: false,  
  error: null,
  data: [],
};

export const AUTH_STARTED = `${DUCK_NAME}/AUTH_STARTED`;
export const AUTH_SUCCEED = `${DUCK_NAME}/AUTH_SUCCEED`;
export const AUTH_FAILED = `${DUCK_NAME}/AUTH_FAILED`;
export const AUTH_CLEAN = `${DUCK_NAME}/AUTH_CLEAN`;

export const authStarted = () => ({ type: AUTH_STARTED });
export const authSucceed = (data) => ({ type: AUTH_SUCCEED, data });
export const authFailed = (error) => ({ type: AUTH_FAILED, error });
export const authClean = () => ({ type: AUTH_CLEAN });

export const getSensediaTokenStorage = () => null;

export const authPage = () => async (dispatch) => {
  try{
  dispatch(authStarted());  
  dispatch(authSucceed({}));
  } catch (err) {
    dispatch(authFailed());
  }
}; 

export const CLEAN_AUTH_LOADING = `${DUCK_NAME}/CLEAN_AUTH_LOADING`;
export const cleanAuthLoading = () => ({ type: CLEAN_AUTH_LOADING });

export const cleanAuthLoadingFunction = () => async (dispatch) => {
  dispatch(cleanAuthLoading());
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_STARTED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: true,
      };
    case AUTH_SUCCEED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: false,
        success: true,
        error: null,
        data: action.data,
      };
    case AUTH_FAILED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: false,
        error: action.error,
      };
    case AUTH_CLEAN:
      return { ...INITIAL_STATE };
    case CLEAN_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
