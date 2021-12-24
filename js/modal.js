(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openMobalBtn: document.querySelector('[data-mobal-open]'),
    closeMobalBtn: document.querySelector('[data-mobal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openMobalBtn.addEventListener('click', toggleModal);
  refs.closeMobalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();