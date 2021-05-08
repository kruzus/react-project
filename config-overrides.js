const {alias, aliasJest} = require('react-app-rewire-alias')


  const aliasMap = {
    '@components': 'src/components',
    '@shared': 'src/shared',
    '@styles': 'src/styles',
    '@lambda': 'netlify/functions'
  }

  module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)

