import renderHorasDisponibles from './renderHorasDisponibles';
import renderDiasDisponibles from './renderDiasDisponibles';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

renderHorasDisponibles();
renderDiasDisponibles();
// const container = document.getElementById('container');
