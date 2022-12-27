const container = document.querySelector('.people_u_know');
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
        const html = `
              <div class="identity-box ppl">
            <div class="identity-img bdr_design"></div>
            <div class="identity-text no_bdr_btm">
              <img src="${people.profilePhoto}" alt="">
              <a href="">${people.profileName}</a>
              <p>${people.profileDesignation}</p>
              <div class="followers">
                <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                    fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path
                      d="M11 3a5 5 0 00-3 1 5 5 0 100 8 5 5 0 103-9zM2 8a3 3 0 014.68-2.48 4.87 4.87 0 000 5A3 3 0 015 11a3 3 0 01-3-3zm9 3a3 3 0 01-1.68-.52 4.87 4.87 0 000-5A3 3 0 1111 11z">
                    </path>
                  </svg></p>
                <p>${people.commonFollowers}</p>
              </div>
              <button class="artdeco_btn btn2">Connect</button>
            </div>
          </div>
    `;
        return html;
      })
      .join('')
  );
};
// networks();
