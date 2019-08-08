export default () => {
  const diasDisponibles = [...document.getElementsByClassName('diasDisponibles')];
  const days = 'Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo'.split(',');

  if (diasDisponibles) {
    diasDisponibles.forEach((wrapper, i) => {
      const label = document.createElement('label');

      days.forEach((day) => {
        const span = document.createElement('span');
        const input = document.createElement('input');
        const div = document.createElement('div');

        label.for = day + i;
        span.innerText = day.substring(0, 2);
        input.type = 'checkbox';
        input.value = day;
        input.id = day + i;

        label.appendChild(span);
        label.appendChild(input);
        label.appendChild(div);
      });

      wrapper.appendChild(label);
    });
  }
};
