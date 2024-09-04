import axios from 'axios';

export async function postEvent(newevent) {
  try {
    axios.defaults.baseURL = "http://localhost:5102";
    return await axios.post('/Event',
      {
        "eventId": newevent.eventId,
        "userId": newevent.userId,
        "title": newevent.title,
        "description": newevent.description,
        "startDate": newevent.startDate,
        "endDate": newevent.endDate,
      })
      .then(function (response) {
        console.log(response);
        return response
      })
  }
  catch (error) {
    console.log(error);
  };
}

export async function getEvent(IdUser) {
  try {
    axios.defaults.baseURL = "http://localhost:5102";
    return await axios.get(`/Event/${IdUser}`)
      .then(function (response) {
        console.log(response);
        return response
      })
  }
  catch (error) {
    console.log(error);
  };
}


export async function deleteEvent(eventId) {
  axios.defaults.baseURL = "http://localhost:5102";
  return await axios.delete(`/Event/${eventId}`)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}






