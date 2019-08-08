export default () => {
  const crearCuenta = document.querySelector('.crearCuenta');
  const btnCrearCuenta = document.getElementById('btnCrearCuenta');
  const form = document.querySelector('.crearCuenta form');

  if (crearCuenta) {
    btnCrearCuenta.addEventListener('click', (e) => {
      e.preventDefault();
      let inputs = [...crearCuenta.querySelectorAll('input')];

      inputs = inputs.map(input => `${input.name}=${input.value}`).join('&');

      fetch(`${form.getAttribute('action')}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: inputs,
      })
        .then((response) => {
          const isOk = response.status === 200;
          const action = `${form.getAttribute('action')}/login?${inputs}`;
          if (isOk) {
            fetch(action)
              .then(data => data.json())
              .then((json) => {
                localStorage.setItem('user', JSON.stringify(json.data));
                window.location.replace('./app.html');
              });
          } else {
            const a = 1;
            console.log(a);
            // do something to show that there is already a user with that name
          }
        });
    });
  }
};
