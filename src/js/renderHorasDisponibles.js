export default () => {
  const horasDisponibles = [...document.getElementsByClassName('horasDisponibles')];

  if (horasDisponibles) {
    horasDisponibles.forEach((wrapper) => {
      const selectHour = document.createElement('select');
      const selectTime = document.createElement('select');
      const amOption = document.createElement('option');
      const pmOption = document.createElement('option');

      for (let i = 0; i <= 12; i += 1) {
        const option = document.createElement('option');

        option.value = i;
        option.innerText = i;

        selectHour.appendChild(option);
      }

      amOption.value = 'am';
      pmOption.value = 'pm';

      amOption.innerText = 'am';
      pmOption.innerText = 'pm';

      selectTime.appendChild(amOption);
      selectTime.appendChild(pmOption);

      wrapper.insertBefore(selectHour, wrapper.childNodes[2]);
      wrapper.insertBefore(selectTime, wrapper.childNodes[3]);
    });
  }
};
