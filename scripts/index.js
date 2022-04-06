const popup = document.querySelector('.popup');
const buttonTypeEdit = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

buttonTypeEdit.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let popupForm = document.querySelector('.popup__form');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__text');
let nameInput = document.querySelector('.popup__input_name_active');
let jobInput = document.querySelector('.popup__input_job_active');

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup()
}

popupForm.addEventListener('submit', formSubmitHandler);


