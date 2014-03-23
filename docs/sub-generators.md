> Sub-generators allow you to add a specific file or files to an existing project.

## yo verb:readme

Add a readme template to `docs/README.tmpl.md` by running `yo verb:readme`.

## yo verb:config

Add a Verb config file with:

```bash
yo verb:config foo
```

Where `foo` is one of the following:

* `yo verb:config json`: adds a `.verbrc` file
* `yo verb:config yaml`: adds a `.verbrc.yml` file
* `yo verb:config verbfile`: adds a `verbfile.js` file

**Pro tips**:

* You can use the default config file, `.verbrc.yml`, by running just `yo verb:config`.
* You can add a `verbfile.js` by running just `yo verb:vf`

## yo verb:doc

Add a specific document with:

```bash
yo verb:doc foo.md
```

Where `foo.md` is the name of the file you want to add. If the name used matches an actual file in [verb-readme-includes](https://github.com/assemble/verb-readme-includes), then that file will be copied into the `docs/` directory of your project.

If the name _doesn't match_ a valid file in [verb-readme-includes](https://github.com/assemble/verb-readme-includes), then a new "starter" document will be created using the given file name.

## yo verb:boilerplate

Use a boilerplate to kickstart documentation for a project. Boilerplates include a `README.tmpl.md` template and a few includes, such as `install.md`, `options.md` etc.

```bash
yo verb:boilerplate foo
```

Where `foo` is the name of the boilerplate you want to use from [verb-boilerplates](https://github.com/assemble/verb-boilerplates).

Valid `yo verb:boilerplate` arguments are:

* `node`: adds generic documentation for a [Node.js](nodejs.org) project
* `helper`: adds generic documentation for a [Handlebars](handlebarsjs.com) helper project
* `assembleplugin`: adds generic documents for an [Assemble](https://github.com/assemble/assemble) plugin
* `gulpplugin`: adds generic documents for a [gulp](gulpjs.com) plugin
* `gruntplugin`: adds generic documents for a [Grunt](gruntjs.com) plugin

**Pro tip**: you can use the default boilerplate, `node`, by running just `yo verb:boilerplate`.

### Contrib boilerplates

Used by the Assemble core team:

* `contribplugin`: Same as `assembleplugin`, but includes info specific to the Assemble core team.

### Custom boilerplates

Visit the docs for [adding custom boilerplates](./docs/custom-boilerplates.md).

## yo verb:data

Verb processes templates using data from your project's package.json. You can extend the data available to your templates with any JSON or YAML files specified in `.verbrc.yml` or in `options.data`.

Add a data file to your project with:

* `yo verb:data changelog`: adds a `CHANGELOG` file to the root of your project, formatted as valid YAML.

## yo verb:vf

To a `verbfile.js` to your project, run:

```bash
yo verb:vf
```
Verbfiles are useful for configuring plugins, custom tags, custom source and dest paths, and so on.