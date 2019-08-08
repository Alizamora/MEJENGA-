import renderHorasDisponibles from './renderHorasDisponibles';
import renderDiasDisponibles from './renderDiasDisponibles';
import crearCuenta from './crearCuenta';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

renderHorasDisponibles();
renderDiasDisponibles();
crearCuenta();
// const container = document.getElementById('container');
