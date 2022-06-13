/** @module handlebars-helper-plural */

import {isString, last} from "lodash"
import pluralize from "pluralize"

/**
 * Handlebars helper that returns given number with a possibly pluralized noun
 * @function
 * @returns {string} Compiled text
 * @example
 * import Handlebars from "handlebars"
 * import handlebarsHelperPlural from "handlebars-helper-plural"
 * const handlebars = Handlebars.create()
 * handlebars.registerHelper("plural", handlebarsHelperPlural)
 * const template = handlebars.compile("I have {{plural bananas 'banana' 'bananas'}}!")
 * const result = template({bananas: 4})
 * result === "I have 4 bananas!"
 */
export default (...args) => {
  const {data, hash} = last(args)
  const [count, singularNoun, extraArgument] = args.slice(-1)
  const getNumberString = () => {
    if (count === 1) {
      if (hash.one === true) {
        return "one"
      }
      if (isString(hash.one)) {
        return hash.one
      }
    }
    return count
  }
  const getPluralNoun = () => {
    return hash.plural || extraArgument || pluralize(singularNoun)
  }
  const string = `${getNumberString()} ${count === 1 ? singularNoun : getPluralNoun()}`
  return string
}