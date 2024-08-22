import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Importa el tema
import 'primeicons/primeicons.css'; // Estilos de íconos
import Button from 'primevue/button'; // Importa el componente Button
import './assets/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component('Button', Button); // Registra el componente Button globalmente

app.mount('#app');