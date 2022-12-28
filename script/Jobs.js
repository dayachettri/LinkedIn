const recommended = document.querySelector('.jobs_block');
const jobs = async () => {
  const result = await fetch(
    'https://63a82a65f4962215b57c14fa.mockapi.io/api/v1/jobs'
  );
  const jobs = await result.json();
  const data = jobs[0].jobs;
  recommended.insertAdjacentHTML(
    'afterbegin',
    data
      .map(jobs => {
        const html = `<div class="job_description flex">
        <div class="flex left_flex">
            <img
              src="${jobs.companyImage}"
              alt="company-logo">
            <div class="company_description">
              <a href="#">
                <h3>${jobs.companyPost}</h3>
              </a>
              <h4>${jobs.companyName}</h4>
              <p>${jobs.jobLocation}</p>
              <div class="our-profile flex">
                <img src="${jobs.companyMutualImg}" alt="profile-img">
                <p>${jobs.companyMutualText}</p>
              </div>
              <span>5 days ago</span>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor"
              class="mercado-match" width="32" height="32" focusable="false">
              <path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
              <path
                d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"
              class="mercado-match" width="24" height="24" focusable="false">
              <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
            </svg>
          </div>
          </div>`;
        return html;
      })
      .join('')
  );
};
jobs();
