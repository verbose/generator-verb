Running the generator with `yo verb` will add the following files to your project:

* `docs/README.tmpl.md`: a readme template
* `.verbrc.yml`: a runtime config file for Verb
* `package.json`: with minimal properties defined. However, if this exists already `verb` will be added to `devDependencies`.

## Sub-generators

You can add specific documents to your project by running:

```
yo verb:doc foo.md
```

Where `foo` is the name of the file you want to add. If the name used matches an actual file in [verb-readme-includes](https://github.com/assemble/verb-readme-includes), then that file will be copied into the `docs/` directory of your project.

If the name _doesn't match_ a valid file in [verb-readme-includes](https://github.com/assemble/verb-readme-includes), then a new "starter" document will be created using the given file name.