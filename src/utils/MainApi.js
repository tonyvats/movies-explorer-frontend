import { BASE_URL } from "./constants";

const checkResponse = (response) => response.ok
  ? response.json()
  : Promise.reject(`${response.status}`)

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
  })
  .then((res) => {
    if (res.status === 400) {
        console.log('Не передано одно из полей')
      }
      if (res.status === 401) {
        console.log('Пользователь с email не найден ')
      }
    if (!res.ok) {
        return Promise.reject(`${res.status}`);
    }
    return res.json()
  })
  .then((res) => {
    return res
  })
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkResponse)
}

export const updateProfile = (username, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: username,
      email: email,
    })
  }).then(checkResponse);
};
