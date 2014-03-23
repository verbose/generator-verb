# Custom boilerplates

> Use bower.json to manage your own custom boilerplates or templates for Verb

We might put it on the roadmap to natively allow custom boilerplates. If this is something you'd like to see supported natively, please submit a [feature request or a pull request](https://github.com/assemble/generator-verb/issues).

However, in the meantime a simple alternative is to use Bower to manage your custom docs. Here is a suggested workflow to get you started:

### 1. Create the boilerplate

Create a new project that has the docs you want to use on other projects, and add a [bower.json](http://bower.io/#usage) file with something like the following:

```json
{
  "name": "verb-boilerplate-foo",
  "version": "0.1.0",
  "main": [
    "templates/README.tmpl.md",
    "templates/about.md",
    "templates/options.md",
    "templates/examples.md",
    "templates/authors.md"
  ]
}
```

See [Bower.io](http://bower.io/) for suggestions on customizing this file.

_Oh, and don't forget to actually add the documention/templates to the directories specified in bower.json!_

### 2. Register the package with Bower

You'll want to visit [Bower's documentation](http://bower.io/#registering-packages) to learn how to register new packages. Also note that before registering your package it must be in a repository on GitHub where Bower can find it!

### 3. Using your custom boilerplate

Once your package has been created and registered with Bower, add a `.bowerrc` file and a `bower.json` file to the root of any project that will be using your new boilerplate.

In `.bowerrc` add the following:

```json
{
  "directory": "docs"
}
```

In `bower.json` add the following (customize to the needs of your project):

```json
{
  "name": "your-project-name",
  "version": "0.1.0",
  "dependencies": {
    "verb-boilerplate-foo": "~0.1.0"
  }
}
```

### 4. Install your custom boilerplate

If everything is setup properly, running `bower istall` at the command line should install your boilerplate in the `./docs` directory of your project!


_Suggestions or pull requests for improving this workflow or the project in general or welcome!_
