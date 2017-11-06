let username = document.querySelector('#username');
let password = document.querySelector('#password');
let login = document.querySelector('#loginButton');
let user = {
  username: 'himanish58',
  password: '1234',
};

let validateForm = () => {
  console.log('hello');
  if (username.value === user.username && password.value === user.password) {
    window.location.href = '/homepage.html';
    return true;
  }

  alert('Please enter a valid username and password');
  username.value = '';
  password.value = '';
  return false;
};

login.addEventListener('click', validateForm);
