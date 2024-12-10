import axios from 'axios';

const API_URL = 'https://api.example.com/auth/';

export const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(API_URL + 'login', { 
        username, 
        password 
      });
      
      // Lưu token vào localStorage
      localStorage.setItem('token', response.data.token);
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Đăng nhập thất bại');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    return localStorage.getItem('token');
  }
};