# {%= name %} {%= badge("fury") %}

> {%= description %}


## Install
{%= include("install-npm", {save: true}) %}


## Run tests

```bash
npm test
```

## Register the helper

> This should work with any engine, here are a few examples

### [template](https://github.com/jonschlinkert/template)

```js
template.helper('{%= strip(name, "helper-") %}', require('{%= name %}'));
```

### [assemble](https://github.com/assemble/assemble)

For Assemble v0.6.x, to register the helper for use with any template engine:

```js
assemble.helper('{%= strip(name, "helper-") %}', require('{%= name %}'));
```

### [verb](https://github.com/jonschlinkert/verb)

```js
verb.helper('{%= strip(name, "helper-") %}', require('{%= name %}'));
```

### [handlebars](https://github.com/wycats/handlebars.js/)

```js
var handlebars = require('handlebars');
handlebars.registerHelper('{%= strip(name, "helper-") %}', require('{%= name %}'));
```

## Example usage

Handlebars:

```handlebars
{{foo ""}}
```

Lo-Dash or Underscore:

```html
<%%= foo("") %>
```

Verb (lo-dash, with special delimiters to avoid delimiter collision in documentation):

```html
{%%= foo("") %}
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue]({%= bugs.url %})

## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}
