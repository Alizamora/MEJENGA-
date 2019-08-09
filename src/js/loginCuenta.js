import login from './accessUtilities';

export default () => {
  const form = document.getElementById('formAcceder');
  if (form) {
    let inputs = [...form.querySelectorAll('input')];
    let action = `${form.getAttribute('action')}/login?`;
    const submit = form.querySelector('button[type="submit"]');
    const labelError = form.querySelector('label[for="crearUserName"]');

    submit.addEventListener('click', (e) => {
      e.preventDefault();
      inputs = inputs
        .map(input => `${input.name}=${input.value}`).join('&');
      action += inputs;

      fetch(action)
        .then(response => response.json())
        .then((json) => {
          if (!json.error) {
            login(json);
          } else {
            labelError.innerText = 'El nombre de usuario y/o contraseña no son correctos';
          }
        });
    });
  }
};
