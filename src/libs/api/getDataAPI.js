import axios from 'axios';

export const getDataAPI = async (targetData) => {
  const response = await axios.get(`/data/${targetData}.json`);

  return response.data.data;
}