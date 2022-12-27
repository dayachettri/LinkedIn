const toggle_down_btn = document.querySelector(".show_less");
const hiddn = document.querySelector(".hidden_pop_up");
const toggle_up_btn = document.querySelector(".show_more")

  toggle_down_btn.addEventListener("click", ()=>{
  hiddn.classList.add('display_block');
  toggle_up_btn.classList.remove('display_block');
  toggle_down_btn.classList.add('display_block');
});

  toggle_up_btn.addEventListener("click", ()=>{
  hiddn.classList.remove('display_block');
  toggle_up_btn.classList.add('display_block');
  toggle_down_btn.classList.remove('display_block');
});

const container = document.querySelector('.trending_people_box');
const networks = async () => {
  const result = await fetch(
    'https://63a82a65f4962215b57c14fa.mockapi.io/api/v1/networks'
  );
  const networks = await result.json();
  const data = networks[0].networks;
  container.insertAdjacentHTML(
    'afterbegin',
    data
      .map(people => {
        const html = `<div class="trending_card">
    <div class="cover_photo"></div>
    <div class="profile_photo cross_network"><img src="${people.profilePhoto}" alt="">
      <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
        fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path
          d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z">
        </path>
      </svg></button>
  </div>
    <div class="profile_name">${people.profileName}</div>
    <div class="profile_designation">${people.profileDesignation}</div>
    <button class="artdeco_btn btn11">Follow</button>
  </div>
 `
        return html;
      })
      .join('')
  );
};
networks();
