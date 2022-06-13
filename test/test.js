import path from "node:path"

import Handlebars from "handlebars"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: handlebarsHelperPlural} = indexModule

const handlebars = Handlebars.create()
handlebars.registerHelper("plural", handlebarsHelperPlural)

it("should run for singular", () => {
  const template = handlebars.compile("I have {{plural bananas 'banana' one=true}}!")
  const result = template({bananas: 1})
  expect(result).toBe("I have one banana!")
})

it("should run for plural", () => {
  const template = handlebars.compile("I have {{plural bananas 'banana' 'bananas'}}!")
  const result = template({bananas: 4})
  expect(result).toBe("I have 4 bananas!")
})