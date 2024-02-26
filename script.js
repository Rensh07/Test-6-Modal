'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModel = document.querySelector('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const btnCancle = document.querySelector('.cancel');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModel.addEventListener('click', openModal);
btnCloseModel.addEventListener('click', closeModal);
btnCancle.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
