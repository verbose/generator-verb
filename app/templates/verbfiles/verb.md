# {%= name %} {%= badge("fury") %}

> {%= description %}

## Install
{%= include("install") %}

## Run tests

```bash
npm test
```

## Usage

```js
var verb = require('verb');
var '{%= strip(name, "verb-") %}' = require('{%= name %}');

verb.task('default', function() {
  verb.src('foo/*.js')
    .pipe('{%= strip(name, "verb-") %}'())
    .pipe(verb.dest('dist'));
});
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
