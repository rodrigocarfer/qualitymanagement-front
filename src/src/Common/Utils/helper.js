export const getDefaultPath = (location) => ({
  pathname: '/',
  state: {
    from: location,
  },
});

export const removerEspacoString = (str) => str.replace(/\s/g, '');

export const converterTodasPalavrasComPrimeiraLetraMaiuscula = (str) => str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

export const formatarNumeroDoisDigitos = (numero) => (`0${numero}`).slice(-2);

export default null;
