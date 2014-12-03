# {%= name %} {%= badge("fury") %}

> {%= description %}

## Install
{%= include("install-global") %}

## Run tests

```bash
npm test
```

## Usage

```js
var <%= _.namify(appname) %> = require('{%= name %}');
```

## CLI
{%= comments("bin/cli.js") %}

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