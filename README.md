# bases

One of the pitfalls I've run into in the past when using sass is making my styles too specific. For example,

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

## License

Copyright © Danny Hadley. Distributed under the MIT license.
