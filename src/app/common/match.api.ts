import axios from 'axios';

export const getAll = async (page: number, size: number) => {
  return await axios.get('http://localhost:8080/matches?page=' + page + '&size=' + size)
    .then(response => {
      return response.data;
    });
};

export const get = async (matchId: number) => {
  return await axios.get('http://localhost:8080/matches/' + matchId)
    .then(response => {
      console.log('asdf' + response.data);
      return response.data;
    });
};
