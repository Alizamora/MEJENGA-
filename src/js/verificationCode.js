import login from './accessUtilities';

export default () => {
  const sendVerificationCode = document.getElementById('sendVerificationCode');
  const form = document.getElementById('formAcceder');
  const userName = document.getElementById('userName');
  const formCodigo = document.getElementById('formCodigo');

  if (sendVerificationCode) {
    const inputCodigo = formCodigo.querySelector('input');
    const submitCodigo = formCodigo.querySelector('button[type="submit"]');
    const labelCodigo = formCodigo.querySelector('label[for="codigo"]');
    const action = form.getAttribute('action');

    sendVerificationCode.addEventListener('click', () => {
      fetch(`${action}/verification-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `${userName.name}=${userName.value}`,
      });
    });
    submitCodigo.addEventListener('click', (e) => {
      e.preventDefault();
      fetch(`${action}/verify?${inputCodigo.name}=${inputCodigo.value}`)
        .then(data => data.json())
        .then((json) => {
          if (!json.error) {
            login(json);
          } else {
            labelCodigo.innerText = 'El código ingresado es incorrecto';
          }
        });
    });
  }
};
