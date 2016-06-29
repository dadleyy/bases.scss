# bases ![shield](https://img.shields.io/bower/v/bases.scss.svg?maxAge=10) ![travis](https://travis-ci.org/dadleyy/bases.scss.svg?branch=master)

Inspired by [expressive css](http://johnpolacek.github.io/expressive-css), this package aims at creating a set of classes that can be used to avoid the need to apply common css properties to components in sass. Instead, the properies are applied as classes inside the application's markup/template files, isolating the codebase growth to those files.

One of the pitfalls codebases may run into when using sass is making styles too specific. For example,

```sass
.user-login .input-field .input
  margin-bottom: 20px
```

Repeated over and over again for every component in the codebases, your application will end up with 2x as much code as it needs; you've added markup _and_ styles.

To avoid this, [bases](https://github.com/dadleyy/bases.scss) creates class selectors for many of the style properties so you can use them right in your markup:

```jade
.user-login.clearfix.padding-tb-5.padding-lr-2
  h2.margin-bottom-2 Login below
  .clearfix
    .float-left
      p.fg-black-lighten-40 email
    .float-left
      input.width-100.border-1.border-color-white-darken-10(type="input")
  .clearfix
    .float-left
      p.fg-black-lighten-40 email
    .float-left
      input.width-100.border-1.border-color-white-darken-10(type="input")
```

## Using w/ bower

To use the classes provided by this package, install using [bower](https://bower.io) and add the `bases` file to your include paths during build.

```
$ bower i bases.scss
```

Then, in your project's `gulpfile.js` for example:

```js
gulp.task("sass", ["clean:css"], function() {
  let source = [
    "./src/sass/app.sass"
  ];

  let conf = {
    includePaths: [
      "./bower_components/bases.scss/src"
    ]
  };

  return gulp.src(source)
    .pipe(sass(conf).on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});
```

### Building

If you'd rather use a built version of this package, you can compile the minified file by running `gulp:release`.

```
$ git clone https://github.com/dadleyy/bases.scss.git ./bases
$ cd bases
$ npm i
$ ./node_modules/.bin/gulp release
```

Once complete, you will have a `bases.min.css` file in the `dist/` directory.

## License

Copyright © Danny Hadley. Distributed under the MIT license.
