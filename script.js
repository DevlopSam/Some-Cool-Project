'use-strict';


const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}


for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', 
  openModal);



const closeModal = function() {
  
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}


  btnCloseModel.addEventListener('click', closeModal);
  overLay.addEventListener('click', closeModal);


  document.addEventListener('keydown', function(e) {

    console.log(e.key);

      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
              closeModal();
      }
  });
