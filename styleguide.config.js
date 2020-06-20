var path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Benchprep Component Library',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: true,
  sections: [
    {
      name: 'Buttons',
      components: 'src/components/buttons/[A-Z]*.vue'
    }
  ],
  webpackConfig: {
    // custom config goes here
  },
  exampleMode: 'expand',
  require: [
    path.join(__dirname, 'src/assets/css/style.css')
  ]
}
