import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import './styles/main.css';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
