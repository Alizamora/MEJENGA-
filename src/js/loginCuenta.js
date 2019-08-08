export default () => {
  const accederCorreo = document.getElementById('accederCorreo');
  const accederContraseña = document.getElementById('accederContraseña');

  if (accederCorreo) {
    accederCorreo.name = 'email';
    accederContraseña.name = 'password';

    const inputs = [accederCorreo, accederContraseña]
      .map(input => `${input.name}=${input.value}`).join('&');
    const form = accederCorreo.parentElement();
    const submit = form.querySelector('button[type="submit"]');
    const action = `${form.getAttribute('action')}/login?${inputs}`;

    submit.addEventListener('click', (e) => {
      e.preventDefault();
      fetch(action);
    });
  }
};
