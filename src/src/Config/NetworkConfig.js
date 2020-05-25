import axios from 'axios';
import { authContext } from './adalConfig';

export default {
  setupInterceptors: (store) => {
    axios.interceptors.response.use(
      (response) => response,
      (responseError) => {
        if (axios.isCancel(responseError)) {
          return Promise.reject(responseError);
        }
        const { response: { status } } = responseError;
        if (!responseError.response) {
          return Promise.reject(responseError);
        }
        if (responseError.response) {
          if (status === 401) {
            window.localStorage.clear();
            authContext.logOut();
          }
        }
        return Promise.reject(responseError);
      },
    );
  },
};
