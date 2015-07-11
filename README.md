# generator-rndpxl 

A generator for [Yeoman](http://yeoman.io).


## Getting Started

To get started:

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install `generator-mg` from npm, run:

```
$ npm install -g generator-mg
```

Finally, initiate the generator:

```
$ yo mg
```

### Grunt Organization

The `Gruntfile.coffee` simply namespaces the various tasks into larger tasks. 
Configuration for each task is in the `/grunt/` directory.

### Mg Task Overview

There are a few main Grunt tasks: 

  * `grunt` to run all the tasks
  * `grunt server` which sets up watch task and a local server (port 9000 by default) that will livereload on most devices automagically.
  * `grunt watch` if a local server isn't needed.

###Templating

Templating is handled by the [Assemble](http://assemble.io) plugin. Any files in the `templates/pages/` directory are compiled into a `.html` version in the `dist/` directory.

[Handlebars](http://handlebarsjs.com) + YAML data files are the defaults used by Mg. See an example data file in `data/index.yml`.

### Good Ideas

To stay up to date with the latest build of Mg, run `npm update -g generator-mg` periodically on your system.

### Getting To Know Yeoman

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
