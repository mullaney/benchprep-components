import '../../assets/css/style.css'

export default { title: 'Buttons and Stuff' }

export const ButtonSmall = () => `
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
