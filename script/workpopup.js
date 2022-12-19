const togglerWork = document.querySelector(".ph-x");
const workPopup = document.querySelector(".work_popup");
const workIcon = document.querySelector(".nine-dots");

document.body.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.parentElement.classList.contains("nine-dots")) {
    workPopup.classList.remove("display_block");
    overlay.classList.remove("hidden");
    document.body.classList.add("disable-scroll");
  }
});

togglerWork.addEventListener("click", function () {
  workPopup.classList.add("display_block");
  overlay.classList.add("hidden");
  document.body.classList.remove("disable-scroll");
});

// export default workPopup;
