import jwtDecode from 'jwt-decode';
import Base64 from 'Base64';

export const encriptarSenha = (obj) => {
  const encodedString = Base64.btoa(obj);
  return encodedString;
};

export const decryptToken = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};

export default null;
