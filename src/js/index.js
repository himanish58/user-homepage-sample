let username = document.querySelector('#username');
let password = document.querySelector('#password');
let login = document.querySelector('form');
let user = {
  username: 'himanish58',
  password: '1234',
};

function validateForm() {
  if (username.value === user.username && password.value === user.password) {
    return true;
  }

  alert('Please enter a valid username and password');
  return false;
};

// login.addEventListener('submit', validate);
