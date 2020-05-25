export const { API_URL } = window.env;

export const ObterRequisicaoComParametrosQueryString = (baseUrl, obj) => {
  const complementoQueryString = Object.keys(obj).map((key) => {
    if (Array.isArray(obj[key])) {
      let str = '';
      obj[key].forEach((value, index, array) => {
        if (str != '') str += '&';
        str += `${key}=${encodeURIComponent(value)}`;
      });
      return str;
    }
    return `${key}=${encodeURIComponent(obj[key])}`;
  }).join('&');
  return complementoQueryString ? `${baseUrl}?${complementoQueryString}` : baseUrl;
};

export default null;
