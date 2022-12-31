'use strict';
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btnSignUp = document.querySelector('.mainbtn');
const fullName = document.querySelector('.name');
const auth = [];
const authentication = function (e) {
  if (email.value && password.value) {
    const obj = {
      name: fullName.value,
      image: 'https://wallpaperaccess.com/full/2514661.jpg',
      email: email.value,
      password: password.value,
    };
    auth.push(obj);
    localStorage.setItem('auth', JSON.stringify(auth));
  } else {
    // e.preventDefault();
    alert('Invalid inputs');
  }
};
btnSignUp.addEventListener('click', authentication);

//# ------------------------- SIGN IN AUTHENTICATION ------------------------- */
