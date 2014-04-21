Once installed globally, simply run:

* `yo verb` to to start a new project
* `yo verb:doc [foo]` to add a [specific document](https://github.com/assemble/verb-readme-includes) or 'include'.

### yo verb

Running the generator with `yo verb` will add the following files to your project:

* `.verbrc.md`: a markdown-runtime config file for Verb. YAML front-matter can be used for config, and the markdown content is used to generate your project's README.md.
* `package.json`: with minimal properties defined. However, if this alredy exists `verb` will be added to `devDependencies`.