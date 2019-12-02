# handlebars-helper-plural


Handlebars helper that returns given number with a possibly pluralized noun.



## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/handlebars-helper-plural@1.0.1");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof handlebars-helper-plural.default
```

## Documentation
Handlebars helper that returns given number with a possibly pluralized noun

**Kind**: Exported function  
**Returns**: <code>string</code> - Compiled text  
**Example**  
```javascript
import Handlebars from "handlebars"
import handlebarsHelperPlural from "handlebars-helper-plural"
const handlebars = Handlebars.create()
handlebars.registerHelper("plural", handlebarsHelperPlural)
const template = handlebars.compile("I have {{plural bananas 'banana' 'bananas'}}!")
const result = template({bananas: 4})
result === "I have 4 bananas!"
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
