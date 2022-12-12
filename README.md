# MoGo

## What is this?

Website built with HTML and SASS.

It follows:

- Mobile First approach

- [7-1 SASS pattern](https://sass-guidelin.es/#the-7-1-pattern) (_however excludes `/pages` and `/themes` directories due to its characteristics_)

  and

- [BEM class naming convention](https://getbem.com/naming/)

## Build Stylesheets

In order to build css, in the `root` of the project run:

```
    $ sass sass:public/stylesheets
```

or

```
    $ sass sass/main.scss:public/stylesheets/main.css
```

If you want to develop this project further you can build css on the fly with:

```
    $ sass --watch sass:public/stylesheets
```

or

```
    $ sass --watch sass/main.scss:public/stylesheets/main.css
```

The above command will enter a watch mode, meaning any change of `.scss` files will cause `.css` to recompile.
