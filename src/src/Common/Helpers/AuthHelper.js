import { REACT_APP_TOKEN_KEY, REACT_APP_USER_KEY, SENSEDIA_TOKEN_LOCAL_STORAGE_KEY } from '../Utils/consts';

export const TOKEN_KEY = REACT_APP_TOKEN_KEY;

export const obterAccessToken = () => JSON.parse(window.localStorage.getItem(SENSEDIA_TOKEN_LOCAL_STORAGE_KEY));

export const accessTokenValido = () => {
  return true;
  const token = obterAccessToken();
  return token && token.expireDate && new Date(token.expireDate) > new Date();
};

export const Token = {
  get: () => JSON.parse(window.localStorage.getItem(TOKEN_KEY)),
  save: ({ tokenAD }) => {
    const dataString = JSON.stringify({ tokenAD });
    window.localStorage.setItem(TOKEN_KEY, dataString);
  },
  remove: () => {
    window.localStorage.removeItem(TOKEN_KEY);
  },
};

export const USER_KEY = REACT_APP_USER_KEY;

export const User = {
  get: () => JSON.parse(window.localStorage.getItem(USER_KEY)),
  save: ({
    nome, email,
  }) => {
    const dataString = JSON.stringify({
      nome, email,
    });
    window.localStorage.setItem(USER_KEY, dataString);
  },
  remove: () => {
    window.localStorage.removeItem(USER_KEY);
  },
};

export default null;
