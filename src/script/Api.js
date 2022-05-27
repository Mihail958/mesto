import {renderLoading} from '../pages/index.js'

class Api {
  constructor({baseUrl, headers}) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  //проверка ответа от сервера
  _errorHadler(res){ 
    if(res.ok){
      return res.json();
    }
    return Promise.reject(res.status)
  }

  //получение данных профиля
  getProfile(){ 
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._errorHadler)
  }
  
  //получение карточек
  getInitialCards() { 
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._errorHadler)
  }

  //редактирование профиля
  editProfile(name, about) { 
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(this._errorHadler)
  }

  //добавление новой карточки
  addNewCard(name, link) { 
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(this._errorHadler)
  }

  deleteCard(id) { //удаление карточки
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._errorHadler)
  }

  putLike(id) { //постановка лайка
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers
    })
    .then(this._errorHadler)
  }

  deleteLike(id) { //удаление лайка
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._errorHadler)
  }

  changeAvatar(avatar) { //редактирование аватара
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({avatar})
    })
    .then(this._errorHadler)
  }
}
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
    headers: {
      authorization: 'bd9d59c4-e0ff-4259-a84f-b978a98d9164',
      'Content-Type': 'application/json'
    }
  });