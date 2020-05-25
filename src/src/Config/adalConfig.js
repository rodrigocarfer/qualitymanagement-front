import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
const {REACT_APP_CLIENT_ID, POST_LOGIN_REDIRECT_URI} = window.env;

export const adalConfig = {
  tenant: 'c6378a59-9025-42be-b941-103b280edffa',
  clientId: REACT_APP_CLIENT_ID,
  endpoints: {
    api: '',
  },
  cacheLocation: 'localStorage',
  redirectUri: POST_LOGIN_REDIRECT_URI
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) => adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);
