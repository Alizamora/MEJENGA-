import renderHorasDisponibles from './renderHorasDisponibles';
import renderDiasDisponibles from './renderDiasDisponibles';
import crearCuenta from './crearCuenta';
import accederCuenta from './accederCuenta';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

renderHorasDisponibles();
renderDiasDisponibles();
crearCuenta();
accederCuenta();
// const container = document.getElementById('container');
