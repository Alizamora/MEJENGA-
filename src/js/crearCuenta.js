import login from './accessUtilities';

export default () => {
  const crearCuenta = document.querySelector('.crearCuenta');
  const btnCrearCuenta = document.getElementById('btnCrearCuenta');
  const form = document.getElementById('formCrearCuenta');

  if (crearCuenta) {
    btnCrearCuenta.addEventListener('click', (e) => {
      e.preventDefault();
      const inputs = [...crearCuenta.querySelectorAll('input')]
        .map(input => `${input.name}=${input.value}`).join('&');
      const actionLogin = `${form.getAttribute('action')}/login?${inputs}`;
      const actionUsers = `${form.getAttribute('action')}/users`;

      fetch(actionUsers, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: inputs,
      })
        .then((response) => {
          const isOk = response.status === 200;
          const errorLabel = form.children[0];
          if (isOk) {
            errorLabel.innerText = '';
            fetch(actionLogin)
              .then(data => data.json())
              .then((json) => {
                login(json);
              });
          } else {
            errorLabel.innerText = 'El nombre de usuario ya está en uso';
            // do something to show that there is already a user with that name
          }
        });
    });
  }
};
