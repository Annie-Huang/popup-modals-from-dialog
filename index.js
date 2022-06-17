const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  // show() will display the <dialog> in it's original place
  // modal.show();

  // showModal() will display the <dialog> like a modal, with shaded background and place the <dialog> into the center.
  // When the modal open and when you click escape, it will close automatically, out of box.
  // But click outside does not work.
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});
