import axios from 'axios';

export const getUsersAPI = async () => {
  const response = await axios.get('/data/user.json');

  return response.data.data;
};
