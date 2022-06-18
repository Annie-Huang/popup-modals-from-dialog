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
  // So when it is clicked it will initially becomes <dialog class="modal" id="modal" open="" closing="">...</dialog>
  modal.setAttribute('closing', ''); // It is the same as modal.setAttribute('closing', 'true');

  // When animation ends (.modal[closing]'s animation), we will remove the 'closing' and 'open' attributes
  modal.addEventListener('animationend', () => {
    modal.removeAttribute('closing');
    modal.close();
  });
});
