import axios from 'axios';

import ApiConfig from './ApiConfig';

const instance = axios.create(ApiConfig);

export default instance;
