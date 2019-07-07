/** @module handlebars-helper-plural */

import {last, dropRight, isString} from "lodash"
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
  const {data, hash} = args |> last
  const [count, singularNoun, extraArgument] = args |> dropRight
  const getNumberString = () => {
    if (count === 1) {
      if (hash.one === true) {
        return "one"
      }
      if (hash.one |> isString) {
        return hash.one
      }
    }
    return count
  }
  const getPluralNoun = () => {
    return hash.plural || extraArgument || pluralize(singularNoun)
  }
  const string = `${getNumberString()} ${count === 1 ? singularNoun : getPluralNoun()}`
  debugger
  return string
}