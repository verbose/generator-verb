# {%= name %} {%= badge("fury") %}

> {%= description %}

## Install
{%= include("install-npm", {save: true}) %}

## Run tests

```bash
npm test
```
{% var nickname = "<%= _.namify(appname) %>" %}

## Usage

```js
var {%= nickname %} = require('{%= name %}');
```

### async

```js
{%= nickname %}.parse(str, options, function(err, result) {
  if (err) { throw err; }
  console.log(result);
});
```

### sync

```js
var result = {%= nickname %}.parseSync(str, options);
console.log(result);
```

## API
{%= comments("index.js") %}

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue]({%= bugs.url %})

## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}

[parser-cache]: https://github.com/jonschlinkert/parser-cache