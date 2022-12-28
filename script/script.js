'use strict';
//# ------------------------------- CHANGE NAME ------------------------------ */
const fullName = document.querySelectorAll('.fullName');
const storedName = JSON.parse(localStorage.getItem('auth'));
const displayName = storedName?.[0]['name'] ?? 'Professor';
fullName.forEach(item => {
  item.textContent = displayName;
});

//# ------------------------------------ * ----------------------------------- */
let userData;
let id;
const posts = document.querySelector('.posts');
window.onload = async () => {
  const result = await fetch(
    'https://63a82a65f4962215b57c14fa.mockapi.io/api/v1/userData'
  );
  const post = await result.json();
  console.log(post[0].userData);
  userData = post[0].userData;
  id = post[0].userData.length;
  posts.insertAdjacentHTML(
    'afterbegin',
    post[0].userData
      .map(post => {
        return `
    <div class="post" data-id="${post.id}">
    <div class="reactor-box flex">
    <div class="reactor flex">
      <img src="${post.reactorImage}" alt="reactor-image">
      <p>${post.reactorName} <span>likes this</span></p>
    </div>
    <i class="ph-dots-three-bold"></i>
  </div>
      <div class="poster-box flex">
        <div class="poster-info flex">
          <img
            src="${post.authorImage}"
            alt=""
          />
          <div class="poster-text flex">
            <p class="poster-name">${post.authorName}</p>
            <p class="poster-job">${post.jobTitle}</p>
            <p class="posted-time flex">
              <span>${post.postTime}</span>
              <span class="middot">&middot;</span>
              <i class="ph-globe-hemisphere-east-fill"></i>
            </p>
          </div>
        </div>
        <div class="follow flex">
          <i class="ph-plus-bold"></i>
          <p>Follow</p>
        </div>
      </div>

      <div class="post-description">
        <p>${post.postDescription}</p>
      </div>

      <div class="post-image">
        <img src="${post.image}" alt="" />
      </div>

      <div class="reaction-count-box flex">
        <div class="left">
          <p class="likes-count">${post.reactionCount} Likes</p>
        </div>

        <div class="right flex">
          <p class="comment-count">${post.commentCount} Comments</p>
          &middot;
          <p></p>
        </div>
      </div>

      <ul class="react-box flex">
        <li>
          <svg
            class="btn-like"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
            ></path>
          </svg>
          <span class="btn-like" style="user-select: none;">Like</span>
        </li>
        <li>
          <svg class="btn-comment"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
            ></path>
          </svg>
          <span class="btn-comment" style="user-select: none;">Comment</span>
        </li>
        <li class="repost-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15 L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"
            ></path>
          </svg>
          <span style="user-select: none;">Repost</span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          <span style="user-select: none;">Send</span>
        </li>
      </ul>
            <section class="create_comment_box">
          <div class="cmnt_box">
            <img class="cmnt_img" src="https://wallpaperaccess.com/full/2514661.jpg" alt="">
            <div class="cmnt_area">
              <input class="add_comment" placeholder="Add a comment...">
              <div class="emoji">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z">
                    </path>
                  </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                    </path>
                  </svg></div>
              </div>
            </div>
          </div>
          <button class="btn-post-comment hidden">Post</button>
        </section>

  <section class="read_comment">
          <div class="read_cmnt_box">
            <div class="cmntr_img">
              <img
                src="${post.comments[0].commentatorImage}"
                alt="">
            </div>
            <div class="cmnt_text_box">
              <div class="cmnt_text">
                <div class="flex">
                  <div class="cmntr_name">
                    <h4>${post.comments[0].commentatorName}</h4> <span>• 3rd+</span>
                  </div>
                  <div class="time">${post.comments[0].commentTime}</div>
                </div>
                <p class="occupation">${post.comments[0].commentatorDesignation}</p>
                <p class="cmnt_msg_text">${post.comments[0].comment}</p>
              </div>
              <div class="cmnt_reaction">
                <p class="like">Like &middot; ${post.comments[0].commentLikes}</p>
                <p>|</p>
                <p class="reply">Reply</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  `;
      })
      .join('')
  );
};

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

//# ------------------------------- WORK POPUP ------------------------------- */

const togglerWork = document.querySelector('.ph-x');
const workPopup = document.querySelector('.work_popup');
const workIcon = document.querySelector('.nine-dots');

document.body.addEventListener('click', e => {
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

//# ------------------------------- POST POPUP------------------------------- */
const overlay = document.querySelector('.overlay');
const postInput = document.querySelector('.start-post');
const postPopup = document.querySelector('.post-popup');
const closePostPopup = document.querySelector('.close-postPopup');

postInput.addEventListener('click', function () {
  postPopup.classList.remove('display_block');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

closePostPopup.addEventListener('click', function () {
  postPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

//# ------------------------------- CREATE POST ------------------------------ */
const postBox = document.querySelector('.posts');
const btnPost = document.querySelector('.footer-post');
const postText = document.querySelector('.talk-about');
const imageInput = document.querySelector('#image-input');
let uploadedImage = '';

imageInput.addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadedImage = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});

btnPost.addEventListener('click', () => {
  if (postText.value) {
    const html = `
    <div class="post" data-id="${id}">
      <div class="poster-box flex">
        <div class="poster-info flex">
          <img
            src="https://wallpaperaccess.com/full/2514661.jpg"
            alt=""
          />
          <div class="poster-text flex">
            <p class="poster-name">${displayName}</p>
            <p class="poster-job">CS Professor at Harvard University</p>
            <p class="posted-time flex">
              <span>1s ago</span>
              <span class="middot">&middot;</span>
              <i class="ph-globe-hemisphere-east-fill"></i>
            </p>
          </div>
        </div>
        <div class="follow flex">
          <i class="ph-plus-bold"></i>
          <p>Follow</p>
        </div>
      </div>

      <div class="post-description">
        <p>${postText.value}</p>
      </div>

      <div class="post-image">
        <img src="${uploadedImage}" alt="" />
      </div>

      <div class="reaction-count-box flex">
        <div class="left">
          <p class="likes-count"></p>
        </div>

        <div class="right flex">
          <p class="comment-count"></p>
          &middot;
          <p></p>
        </div>
      </div>

      <ul class="react-box flex">
        <li>
          <svg
            class="btn-like"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
            ></path>
          </svg>
          <span class="btn-like" style="user-select: none;">Like</span>
        </li>
        <li>
          <svg class="btn-comment"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
            ></path>
          </svg>
          <span class="btn-comment" style="user-select: none;">Comment</span>
        </li>
        <li class="repost-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15 L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"
            ></path>
          </svg>
          <span style="user-select: none;">Repost</span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          <span style="user-select: none;">Send</span>
        </li>
      </ul>
    </div>
  `;
    //todo:
    // const fragment = document.createRange().createContextualFragment(html);
    //todo:
    const obj = {
      id: id,
      reactorImage:
        'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
      reactorName: 'Devik roy',
      authorImage: 'https://wallpaperaccess.com/full/2514661.jpg',
      authorName: 'Rahul Singh',
      jobTitle: 'Marketing | startup',
      postTime: '1s',
      postDescription: postText.value,
      image: '',
      reactionCount: 0,
      commentCount: 0,
      repostCount: 0,
      comments: [
        {
          commentatorImage: 'https://wallpaperaccess.com/full/2514661.jpg',
          commentatorName: 'Daya Don',
          commentatorDesignation: 'Pro player',
          comment: [],
          commentTime: '1s',
          commentLikes: 0,
        },
      ],
    };
    userData.push(obj);
    postBox.insertAdjacentHTML('afterbegin', html);
    postPopup.classList.add('display_block');
    overlay.classList.add('hidden');
    document.body.classList.remove('disable-scroll');
    postText.value = '';
    id++;
  } else {
    alert('Post description cannot be empty.');
  }
});

//# --------------------------------- LIKE FN -------------------------------- */
document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('clicked')) return;
  if (
    e.target.classList.contains('btn-like') &&
    e.target.closest('.post').classList.contains('post')
  ) {
    e.target.classList.add('clicked');
    for (let i = 0; i < userData.length; i++) {
      if (e.target.closest('.post').dataset.id == userData[i].id) {
        userData[i].reactionCount++;
        e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].textContent = `${userData[i].reactionCount} Likes`;
      }
    }
  }
});

//# ----------------------------------- COMMENT INPUT RENDER FN ----------------------------------- */
document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-comment')) {
    if (e.target.parentElement.parentElement.nextElementSibling) return;
    else {
      e.target.classList.add('active');
      const html = `
          <section class="create_comment_box">
          <div class="cmnt_box">
            <img class="cmnt_img" src="https://wallpaperaccess.com/full/2514661.jpg" alt="">
            <div class="cmnt_area">
              <input class="add_comment" placeholder="Add a comment...">
              <div class="emoji">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z">
                    </path>
                  </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                    </path>
                  </svg></div>
              </div>
            </div>
          </div>
          <button class="btn-post-comment hidden">Post</button>
          
        </section>
    `;
      e.target.parentElement.parentElement.parentElement.insertAdjacentHTML(
        'beforeend',
        html
      );
    }
  }
});

//# --------------------- COMMENT POST BUTTON HIDE AND SHOW FN -------------------- */
const postContainer = document.querySelector('.posts'); //# DONT TOUCH THIS.
postContainer.addEventListener('input', function (e) {
  if (e.target.classList.contains('add_comment') && e.target.value.length > 0) {
    e.target.parentElement.parentElement.nextElementSibling.classList.remove(
      'hidden'
    );
  } else e.target.parentElement.parentElement.nextElementSibling.classList.add('hidden');
});

//# --------------------------- ADD COMMENT FN --------------------------- */

document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-post-comment')) {
    for (let i = 0; i < userData.length; i++) {
      if (e.target.parentElement.parentElement.dataset.id == userData[i].id) {
        userData[i].comments[0].comment.push(
          e.target.parentElement.children[0].children[1].children[0].value
        );
        userData[i].commentCount++;
        console.log(
          e.target.parentElement.parentElement.children[4].children[1]
            .children[0]
        );
        // e.target.parentElement.parentElement.children[4].children[1].children[0].textContent = `${userData[i].commentCount} Comments`;
        console.log(e.target, e.path);
        e.path[2].querySelector(
          '.comment-count'
        ).textContent = `${userData[i].commentCount} Comments`;
      }
    }
    //# render comment html
    const html = `
            <section class="read_comment">
          <div class="read_cmnt_box">
            <div class="cmntr_img">
              <img
                src="https://wallpaperaccess.com/full/2514661.jpg"
                alt="">
            </div>


            <div class="cmnt_text_box">

              <div class="cmnt_text">
                <div class="flex">
                  <div class="cmntr_name">
                    <h4>${displayName}</h4> <span>• 3rd+</span>
                  </div>
                  <div class="time">1s •••</div>
                </div>
                <p class="occupation">CS Professor • Harvard </p>
                <p class="cmnt_msg_text">${e.target.parentElement.children[0].children[1].children[0].value}</p>
              </div>
              <div class="cmnt_reaction">
                <p class="like">Like</p>
                <p>|</p>
                <p class="reply">Reply</p>
              </div>
            </div>
          </div>
        </section>
    `;
    e.target.parentElement.parentElement.insertAdjacentHTML('beforeend', html);
    e.target.parentElement.children[0].children[1].children[0].value = '';
    e.target.classList.add('hidden');
  }
});

// #--------------------------Me(profile) popup---------------------------- */

const profilePopup = document.querySelector('.profile_popup');
document.body.addEventListener('click', e => {
  if (e.target.classList.contains('profile-img')) {
    profilePopup.classList.toggle('display_block');
  }
});

// #------------------------------- PHOTO POPUP--------------------------------- */

const photoPopup = document.querySelector('.photo_popup');
const imgAttachment = document.querySelector('.img_attachment');
const cross = document.querySelector('.img-cross');
const cancelBtn = document.querySelector('.btn-cancel');

imgAttachment.addEventListener('click', () => {
  photoPopup.classList.remove('display_block');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

cross.addEventListener('click', function () {
  photoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

cancelBtn.addEventListener('click', function () {
  photoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

// #------------------------------- VIDEO POPUP---------------------------------

const videoPopup = document.querySelector('.video_popup');
const vidAttachment = document.querySelector('.vid_attachment');
const vidcross = document.querySelector('.vid_cross');
const vidCancelBtn = document.querySelector('.vidCancel');

vidAttachment.addEventListener('click', () => {
  videoPopup.classList.remove('display_block');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

vidcross.addEventListener('click', function () {
  videoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

vidCancelBtn.addEventListener('click', function () {
  videoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

//# ----------------------------- RIGHT ASIDE (HOME PAGE) -----------------------------

const moreNews = document.querySelector('.for_more');
const showMore = document.querySelector('.show-more');

const lessNews = document.querySelector('.for_less');
const showLess = document.querySelector('.show-less');

showMore.addEventListener('click', () => {
  moreNews.classList.remove('display_block');
  showMore.classList.add('display_block');
  showLess.classList.remove('display_block');
});

showLess.addEventListener('click', () => {
  moreNews.classList.add('display_block');
  showMore.classList.remove('display_block');
  showLess.classList.add('display_block');
});
