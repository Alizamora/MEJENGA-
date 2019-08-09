function login(json) {
  localStorage.setItem('user', JSON.stringify(json.data));
  window.location.replace('./app.html');
}

export default login;
