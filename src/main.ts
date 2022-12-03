import { createApp } from 'vue';
import { maska } from 'maska';

import './style.css';
import App from './App.vue';

const app = createApp(App);

app.directive('maska', maska);

app.mount('#app');
