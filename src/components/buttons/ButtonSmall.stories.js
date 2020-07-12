import { withKnobs, select } from '@storybook/addon-knobs'
import ButtonSmall from './ButtonSmall.vue';

export default {
  title: 'Button Small',
  decorators: [withKnobs]
}

const label = 'Types'
const options = [
  'primary',
  'secondary',
  'inverted',
  'danger',
  'warning',
  'success',
]

const defaultValue = 'primary'
const groupId = "GROUP-ID1"

export const buttonTypes = () => ({
  components: { ButtonSmall },
  props: {
    type: {
      default: select(label, options, defaultValue, groupId)
    }
  },
  template:  `<p style="background: #eeeeee; padding: 1ch;"><ButtonSmall :type="type">Select a type</ButtonSmall></p>`
})

export const buttonSmall = () => `
  <div>
    <h2>ButtonSmall</h2>
    <h3>Types</h3>
    <ButtonSmall type="primary">Primary</ButtonSmall>
    <ButtonSmall type="secondary">Secondary</ButtonSmall>
    <ButtonSmall type="danger">Danger</ButtonSmall>
    <ButtonSmall type="warning">Warning</ButtonSmall>
    <ButtonSmall type="success">Success</ButtonSmall>
    <ButtonSmall type="inverted">Success</ButtonSmall>
    <h3>With longer content</h3>
    <p><ButtonSmall type="primary">Lorem ipsum dolor sit amet pulvinar accumsan</ButtonSmall></p>
    <p><ButtonSmall type="primary">Lorem ipsum dolor sit<br/>amet pulvinar accumsan</ButtonSmall></p>
  </div>
`
