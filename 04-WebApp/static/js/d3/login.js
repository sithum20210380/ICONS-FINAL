// const form = document.querySelector('form');
// const usernameInput = document.querySelector('input[name="username"]');
// const passwordInput = document.querySelector('input[name="password"]');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const usernameValue = usernameInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   if (usernameValue === '') {
//     alert('Please enter your username');
//   } else if (passwordValue === '') {
//     alert('Please enter your password');
//   } else {
//     fetch('/login', {
//         method: 'POST',
//         body: new URLSearchParams({
//           username: usernameValue,
//           password: passwordValue
//         })
//       })
//     .then(response => {
//       if (response.ok) {
//         alert('Login successful!');
//         form.reset();
//         window.location.href = '/index'; // navigate to index.html page
//       } else {
//         alert('Login failed. Please try again.');
//       }
//     });
//   }
// });

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  });
  if (response.ok) {
    window.location.href = '/dashboard';
  } else {
    const error = await response.text();
    alert(error);
  }
});

