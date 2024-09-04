import axios from 'axios';



export async function Register(user) {
  axios.defaults.baseURL = "http://localhost:5102";
  return await axios.post('/User/Register', 
  { 
      "userId": user.userId,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email,
      "phone": user.phone,
      "password": user.password 
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function login(userId, password) {
  axios.defaults.baseURL = "http://localhost:5102";
  return await axios.post('/User/Login', {
    "userId": userId,
    "password": password
  }).then(function (response) {
    console.log(response);
    return response
  })
    .catch(function (error) {
      console.log(error);
    });
}








