import axios from 'axios';

export const registerUser = async (formData) => {
  const response = await axios.post('http://localhost:5000/register', formData);
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await axios.post('http://localhost:5000/login', formData);
  return response.data;
};
