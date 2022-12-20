//# ------------------------------- WORK POPUP ------------------------------- */

const togglerWork = document.querySelector('.ph-x');
const workPopup = document.querySelector('.work_popup');
const workIcon = document.querySelector('.nine-dots');

document.body.addEventListener('click', e => {
  console.log(e.target);
  if (e.target.parentElement.classList.contains('nine-dots')) {
    workPopup.classList.remove('display_block');
    overlay.classList.remove('hidden');
    document.body.classList.add('disable-scroll');
  }
});

togglerWork.addEventListener('click', function () {
  workPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});


//# -------------------------- Message popup toggle -------------------------- */

const togglerDown = document.querySelector('.downArrow');
const togglerUp = document.querySelector('.upArrow');
const messageBlock = document.querySelector('.message_complete_block');

togglerUp.addEventListener('click', function () {
  messageBlock.classList.remove('display_block');
});

togglerDown.addEventListener('click', function () {
  messageBlock.classList.add('display_block');
});

// export default workPopup;
