import Vue from 'vue';
import ButtonSmall from './components/buttons/ButtonSmall.vue';

export default { title: 'Buttons and Stuff' }

export const asAComponent = () => ({
  components: { ButtonSmall },
  template: '<ButtonSmall>rounded</ButtonSmall>'
});
