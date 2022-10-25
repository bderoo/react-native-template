const componentGenerator = require('./plop/generators/component')
const screenGenerator = require('./plop/generators/screen')
const formGenerator = require('./plop/generators/form')

module.exports = function (plop) {
  plop.setHelper('spaceCase', (text) => {
    const upperCaseName = text.charAt(0)
      .toUpperCase() + text.slice(1)
    return upperCaseName.split(/(?=[A-Z])/)
      .join(' ')
  })

  plop.setHelper('firstLowerCase', (text) => text.charAt(0)
    .toLowerCase() + text.slice(1))

  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('screen', screenGenerator)
  plop.setGenerator('form', formGenerator)
}
