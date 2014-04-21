> Sub-generators allow you to add a specific file or files to an existing project.

## yo verb:config

Add a Verb config file with:

```bash
yo verb:config foo
```

Where `foo` is one of the following:

* `yo verb:config md`: adds a `.verbrc.md` file
* `yo verb:config yml`: adds a `.verbrc.yml` file
* `yo verb:config verbfile`: adds a `verbfile.js` file


**Pro tips**:

* You can use the default config file, `.verbrc.yml`, by running just `yo verb:config`.
* You can add a `verbfile.js` by running just `yo verb:vf`

Learn about [Verb config files]().

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

Visit the docs for [adding custom boilerplates](./docs/custom-boilerplates.md).


## yo verb:data

This subgenerator makes it easy to add data files to extend the context available to your templates (by default Verb processes templates using data from your project's package.json, but you can extend the data available to your templates with any JSON or YAML files by specifying them in a `data` property in `.verbrc.yml` or `.verbrc.yml`).

* `yo verb:data changelog`: adds a `CHANGELOG` file to the root of your project, formatted as valid YAML.


## yo verb:readme

Add a readme template to `docs/README.tmpl.md` by running `yo verb:readme`.
