Once installed globally, simply run:

* `yo verb` to to start a new project
* `yo verb:boilerplate [foo]` to use a [specific boilerplate](https://github.com/assemble/verb-boilerplates). Verb boilerplates are just sets of documents.
* `yo verb:doc [foo]` to add a [specific document](https://github.com/assemble/verb-readme-includes) or 'include'.

### yo verb

Running the generator with `yo verb` will add the following files to your project:

* `docs/README.tmpl.md`: a readme template
* `.verbrc.yml`: a runtime config file for Verb
* `package.json`: with minimal properties defined. However, if this exists already `verb` will be added to `devDependencies`.