import '../src/assets/css/style.css'

import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your global components.
import ButtonSmall from '../src/components/buttons/ButtonSmall.vue';
import ActionCard from '../src/components/cards/ActionCard.vue';

// Register global components.
Vue.component('ButtonSmall', ButtonSmall);
Vue.component('ActionCard', ActionCard);

configure(require.context('../src', true, /\.stories\.js$/), module);
