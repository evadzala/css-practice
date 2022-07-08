/**
 * @file auto require all context files
 * All you need to do is create a new js file in the context folder.
 */

const locale = {}

const context = require.context('.', true, /.json$/)
context.keys().forEach((key) => {
  const fileName = key.replace('./', '')
  const resource = require(`./${fileName}`)
  const namespace = fileName.replace('.json', '')
  locale[namespace] = JSON.parse(JSON.stringify(resource))
})

export default locale
