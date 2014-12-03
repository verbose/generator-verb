# {%= name %} {%= badge("fury") %}

> {%= description %}


## Install
{%= include("install-npm", {save: true}) %}


## Run tests

```bash
npm test
```
## Usage


### [template](https://github.com/jonschlinkert/template)

```js
template.use('{%= strip(name, "middleware-") %}', require('{%= name %}'));
```

### [assemble](https://github.com/assemble/assemble)

For Assemble v0.6.x:

```js
assemble.use('{%= strip(name, "middleware-") %}', require('{%= name %}'));
```

### [verb](https://github.com/jonschlinkert/verb)

```js
verb.use('{%= strip(name, "middleware-") %}', require('{%= name %}'));
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
