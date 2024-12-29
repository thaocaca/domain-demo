
import axiosClient from './axiosClient';

export const authService = {
  login: async (credentials) => {
    try {
      const response = await axiosClient.post("/accounts/login", credentials);
      console.log("Login success");
      return response.data;
    } catch (error) {
      throw error.response
        ? error.response.data
        : new Error("Login not success");
    }
  },
};

export const createSession = async () => {
  const response = await axiosClient.post("/sessions");
  if (response.status !== 200) {
    console.log("response.status !== 200");
    // throw new Error('Create failed');
  }
  JSON.stringify(response.data);
  return response.data.data;
};

export const checkExistSession = async () => {
  const response = await axiosClient.get("/sessions");
  JSON.stringify(response.data);
  if (response.status !== 200) {
    throw new Error("Not existing");
  }

  return response.data.data;
};