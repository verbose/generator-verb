---
tags: ['verb-tag-jscomments']
---
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
var <%= _.namify(appname) %> = require('{%= name %}');
console.log(<%= _.namify(appname) %>('abc'));
//=> ['a', 'b', 'c'];
```

## API
{%= jscomments("index.js") %}

## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}