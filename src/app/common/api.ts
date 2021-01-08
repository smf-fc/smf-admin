import axios from 'axios';

export const getCheckinByMatchId = async (id) => {
  return await axios.get('http://localhost:8080/checkins/match/' + id)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    });
};

export const getAllCheckIn = async () => {
  return await axios.get('http://localhost:8080/checkins?page=0&size=100')
    .then(response => {
      return response.data.content;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    });
};

export const checkIn = async (value) => {
  return await axios.post('http://localhost:8080/checkins', {
    player: {
      id: 1
    },
    match: {
      id: 1
    },
    wasJoin: value
  })
    .then(response => {
      return response.data.content;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    });
};
