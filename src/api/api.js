// src/services/api.js

import axios from 'axios';
import { API_BASEURL } from './apiEndpoints';

// You can customize this instance
const api = axios.create({
    baseURL: API_BASEURL, // Replace with your API's base URL
    // Additional default configurations can go here
});

export default api;