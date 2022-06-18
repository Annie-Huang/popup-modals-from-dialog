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

modal.addEventListener('click', (e) => {
  // console.log(e.target);
  // Add a event listen to modal and detect if the user is click on P, H2, LABEL, INPUT, DIV OR DIALOG,
  // Notice clicking the white space next to the button is also clicking onto the DIALOG
  console.log(e.target.nodeName);
  if (e.target.nodeName === 'DIALOG') {
    modal.close();
  }
});

closeModal.addEventListener('click', () => {
  // So when it is clicked it will initially becomes <dialog class="modal" id="modal" open="" closing="">...</dialog>
  modal.setAttribute('closing', ''); // It is the same as modal.setAttribute('closing', 'true');

  // When animation ends (.modal[closing]'s animation), we will remove the 'closing' and 'open' attributes
  // Need to do only once, otherwise, any other animation finished will trigger modal.close() meaning the modal can never to open again.
  modal.addEventListener(
    'animationend',
    () => {
      modal.removeAttribute('closing');
      modal.close();
    },
    // There are two animations: .modal[closing] and .modal[open]::backdrop.
    // The following will only apply to the first one, whichever finished first...
    // So if you set .modal[closing] to 500ms and .modal[open]::backdrop to 2000ms,
    // you will see after 500ms, the modal backdrop suddenly disappear because the 'closing' attribute is removed and opacity straight away go away as its original value is
    // .modal::backdrop {opacity: 0;}
    { once: true }
  );
});
