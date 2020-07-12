export default { title: 'Button Favorite' }

export const ButtonFavorite = () => `
  <div>
    <p>Selected false</p>
    <ButtonFavorite :selected="false" />

    <p>Selected true</p>
    <ButtonFavorite :selected="true" />
  </div>
`
