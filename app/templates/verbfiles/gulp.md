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
var gulp = require('gulp');
var '{%= strip(name, "gulp-") %}' = require('{%= name %}');

gulp.task('default', function() {
  gulp.src('foo/*.js')
    .pipe('{%= strip(name, "gulp-") %}'())
    .pipe(gulp.dest('dist'));
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
