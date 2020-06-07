import axios from 'axios';
import { authContext } from './adalConfig';

const selecionarChaveAcesso = () => localStorage.access_token;

const listener = () => {
  const chave_acesso = selecionarChaveAcesso();
  if (chave_acesso) {
    axios.defaults.headers.common.access_token = chave_acesso;
  }
};

const configureListener = (store) => {
  store.subscribe(() => listener());
};

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
  configureListener: (store) => configureListener(store)
};
