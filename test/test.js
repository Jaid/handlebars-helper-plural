
import {expect, it} from "@jest/globals"

import path from "node:path"
import {fileURLToPath} from "node:url"

import Handlebars from "handlebars"

const dirName = path.dirname(fileURLToPath(import.meta.url))
const indexPath = process.env.MAIN ? path.resolve(dirName, "..", process.env.MAIN) : path.join(dirName, "..", "src")

/**
 * @type { import("../src") }
 */
const {default: handlebarsHelperPlural} = await import(indexPath)

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