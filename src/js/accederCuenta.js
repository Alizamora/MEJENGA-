export default () => {
  const container = document.getElementById('container');
  const user = window.localStorage.getItem('user');

  if (user && container) {
    window.location.replace('./app.html');
  }
};
