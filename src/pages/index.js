import { FormValidator } from "../script/FormValidator.js";
import { validationSettings} from "../script/constants.js";
import { Card } from "../script/Card.js";
import { Section } from "../script/Section.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { PopupConfirmation } from "../script/PopupConfirmation";
import { UserInfo } from "../script/UserInfo.js";
import { api } from "../script/Api";
import "../pages/index.css";

//переменные
const popupProfile = document.querySelector('.popup_type_profile-edit')
const popupContainerProfile = popupProfile.querySelector('.popup__container');
const popupFormProfile = popupContainerProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__input_type_name');
const jobInput = popupFormProfile.querySelector('.popup__input_type_profession');
const popupAvatarButtonOpen = document.querySelector('.profile__avatar_change');

// кнопки
const addCardButton = document.querySelector(".profile__button-add");
const editButton = document.querySelector('.profile__button-edit');
// формы
const popupAvatar = document.querySelector('.popup_type_change-avatar');
const editForm = document.querySelector('.popup__form_type_edit');
const addCardForm = document.querySelector('.popup__form_type_add-card');

let userId

//забираем с сервера данные профиля и карточки
Promise.all([api.getProfile(), api.getInitialCards()])
.then(([res, section]) => {
  user.setUserInfo(res.name, res.about, res.avatar);
  userId = res._id;
  section.forEach(data => {
    newCardMaker(data, undefined, cardsList);
  })
})
.catch(console.log);

//переменные валидаций 
const editFormValidator = new FormValidator(validationSettings, editForm);
const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
const changeAvatar = new FormValidator(validationSettings, popupAvatar);

// //валидация
addCardFormValidator.enableValidation();
editFormValidator.enableValidation();
changeAvatar.enableValidation();



//добавляем карточки на страницу
const cardsList = new Section({
  items: [],
  renderer: (data) => {
      newCardMaker(data, '.card-template', cardsList)
    }
  },
  '.elements');

//попап добавления карточки
const popupCardsAdd = new PopupWithForm('.popup_type_add-cards', {
  handleFormSubmit: (data) => {
    popupCardsAdd.renderLoading(true);
  api.addNewCard(data.nameplace, data.photolink)
  .then(res => {
    newCardMaker(res,'.card-template', cardsList);
    popupCardsAdd.close();
   })
   .catch(console.log)
    .finally(() =>{
     popupCardsAdd.renderLoading(false)
     })
  }
});

//данные профиля
const user = new UserInfo({
  nameInputSelector: '.profile__name', 
  jobInputSelector: '.profile__profession', 
  avatarSelector: '.profile__avatar'
});

//попап изменения информации
const popupProfileChange = new PopupWithForm('.popup_type_profile-edit', {
  handleFormSubmit: (data) => {
    console.log('data_proverka',data)
    popupProfileChange.renderLoading(true);
    api.editProfile(data.name, data.job)
    .then(res => {
      user.setUserInfo(res.name, res.about, res.avatar);
      console.log('res_proverka',res);
      popupProfileChange.close();
    })
    .catch(console.log)
    .finally(() =>{
      popupProfileChange.renderLoading(false);

  })
}
})

//попап аватара
const popupAvatarChange = new PopupWithForm('.popup_type_change-avatar', {
  handleFormSubmit: (data) => {
    console.log('data.name_avatar',data.name)
    console.log('data_avatar',data)
    popupAvatarChange.renderLoading(true);
    api.changeAvatar(data.avatar)
    .then(res => {
      console.log('res_avatar',res)
      user.setUserInfo(res.name, res.about, res.avatar)
      popupAvatarChange.close()
    })
    .catch(console.log)
    .finally(() =>{
      popupAvatarChange.renderLoading(false);
  })
  }
});


//создание новой карточки
function newCardMaker(data, undefined, cardsList){
  const newCard = new Card(
    { 
      name: data.name,
      link: data.link,
      likes: data.likes,
      _id: data._id,
      userId: userId,
      ownerId: data.owner._id,
    }, 
    '.card-template', 
    {handleCardClick: () => popupImageOpen.open(data.link, data.name)},
    (id) => {
      popupConfirmationDelete.open();
      popupConfirmationDelete.setFormSubmitHandler(() => {
        console.log(id);
        api.deleteCard(id)
          .then(res => { 
            console.log('res', res)
            newCard.deleteCard();
            popupConfirmationDelete.close()
          })
          .catch(console.log)
      })
    }, 
    (id) => {
      if(newCard.isLiked()){
        api.deleteLike(id)
        .then(res => {
          newCard.setLikes(res.likes)
        })
        .catch(console.log)
      }
      else{
        api.putLike(id)
        .then(res => {
          newCard.setLikes(res.likes)
        })
        .catch(console.log)
      }
    });

    const cardsElement = newCard.generateCard();
    cardsList.addItem(cardsElement);
}

//попап открытой картинки
const popupImageOpen = new PopupWithImage('.popup_type_image');

//попап подтверждения удаления
const popupConfirmationDelete = new PopupConfirmation('.popup_type_confirmation');

//слушатели
popupProfileChange.setEventListeners(); //слушатель на попап изменения профиля
popupImageOpen.setEventListeners(); // ставим слушателей на карточки
popupCardsAdd.setEventListeners(); //ставим слушателей на попап добавления карточек
popupAvatarChange.setEventListeners(); //ставим слушателей на попап аватара
popupConfirmationDelete.setEventListeners(); //ставим слушателей на попап подтверждения удаления


//сушатель на кноку открытия попапа аватара
popupAvatarButtonOpen.addEventListener('click', ()=> { 
  changeAvatar.resetValidation();
  popupAvatarChange.open();
});


//слушатель на кнопку открытия попапа добавления карточки
addCardButton.addEventListener('click', ()=> { 
  popupCardsAdd.open();
  addCardFormValidator.resetValidation();
});


// открываем попап с профилем 
editButton.addEventListener("click", () => {
  popupProfileChange.open();
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
});


