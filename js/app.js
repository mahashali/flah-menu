//get dom
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


//event
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeMoadal);
window.addEventListener('click', outsideClick);

//open
function openModal() {
  modal.style.display = 'block';
}

//close
function closeMoadal() {
  modal.style.display = 'none';
}


//get outside close
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
