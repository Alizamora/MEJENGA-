import renderHorasDisponibles from './renderHorasDisponibles';
import renderDiasDisponibles from './renderDiasDisponibles';
import crearCuenta from './crearCuenta';
import accederCuenta from './accederCuenta';
import loginCuenta from './loginCuenta';
import verificationCode from './verificationCode';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';

renderHorasDisponibles();
renderDiasDisponibles();
crearCuenta();
accederCuenta();
loginCuenta();
verificationCode();
// const container = document.getElementById('container');
