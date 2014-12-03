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
var assemble = require('assemble');
var '{%= strip(name, "assemble-") %}' = require('{%= name %}');

assemble.task('default', function() {
  assemble.src('foo/*.js')
    .pipe('{%= strip(name, "assemble-") %}'())
    .pipe(assemble.dest('dist'));
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
