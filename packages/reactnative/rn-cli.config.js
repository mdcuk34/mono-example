const projectRoot = __dirname
const path = require('path')
const metroConfigHelper = require('react-native-monorepo-helper')
	.metroConfigHelper

module.exports = metroConfigHelper(projectRoot)
	.watchFolder(path.resolve(projectRoot, '../..'))
	.generate()
