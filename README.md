# Unified API Documentation

API Doucmentation for Unified

Forked from [Slate](https://github.com/lord/slate)

## Added Features
- [x] [NodeJS](https://nodejs.org/en/) (replacing `bundler`)
- [x] [npm](https://www.npmjs.com/) for dependencies and tools
- [x] [Gulp](http://gulpjs.com/)
- [x] [Stylelint](https://stylelint.io) for CSS/SCSS linting (`.stylintrc` could use some work)
- [x] [BrowserSync](https://browsersync.io/) for using a local server and live reloading
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer) to handle vendor prefixes
- [x] [Imagemin](https://github.com/imagemin/imagemin) for minifying and optimizing images
- [x] Minification (via `htmlmin`, `cssnano`)
- [x] PostCSS
    - [autoprefixer](https://github.com/postcss/autoprefixer)
    - [cssano](http://cssnano.co/)
    - [stylelint](https://stylelint.io)
- [x] Sourcemapping for easy debugging
- [x] `.editorconfig` to help develop consistent coding styles between different editors and IDEs
- [ ] Improved Caching

*Note*: I'm intentially adding npm scripts for things like `stylelint` and `imagemin` for an easier transition to webpack in the future.

## Developing


### New Developer Setup
- Install **NodeJS** and make sure `node` and `npm` are on your path
- Clone this repo `git@bitbucket.org:wad3g/unified-documentation.git`
- Install dependencies (`npm i`) or `npm run setup` to build the source
- Install `.editorconfig` and `stylelint` plugins for your editor / IDE.

### Commands

Install your dependencies and build the source at `./build`

```
$ npm run setup
```

Lint your CSS/SCSS

```
$ npm run stylelint
```

Minify/optimize your images

```
$ npm run imagemin
```

Convert `swagger.json` to markdown and add to newly created file to `src/includes`

```
$ npm run markdown
```

Run stylelint and watch for changes (run `npm run serve` to exclude stylinting):

```
$ npm start
```

Compile documentation to static site in `./build`:

```
$ npm run build
```

## Converting your JSON to Markdown
In order to build your clean, maintainable, static documentation you need to convert your [Swagger](http://swagger.io/) specification (`json` or `yaml`), which can be viewed via [Swagger UI](http://54.89.99.122:4000/api/swagger/index.html), to [Slate](https://github.com/lord/slate)'s flavor of `markdown`.

To do so we're using the [swagger-to-slate](https://github.com/lavkumarv/swagger-to-slate) node module (which is now included as a dependency). However, if you'd like to call it by name, via any directory, you may want to install it globally: `npm i -g swagger-to-slate`.

_See the [swagger-to-slate](https://github.com/lavkumarv/swagger-to-slate) documentation for additional usage and details._

### Usage
Download your `swagger.json` and place it in the root directory of your project. Next run `npm run markdown` to convert your file from `.json` to `.md`.

Running `npm run markdown` does several things:

- Converts your `swagger.json` to markdown
- Outputs the newly generated markdown file as `reference.md` in the `src/inlcudes/` direcory
    + We output the file as `reference.md` because we must specificy _all_ the projects includes in `index.yml`
- Deletes the original `swagger.json` file

*Note*: You can still convert any `json` file to markdown using the following command `swagger-to-slate -i ~/location/of/file.json`. Just before sure update `index.yml` and move the converted markdown file to the `src/includes/` directory.


### Includes
Maintaining _all_ of your documentation in one file could become relatively difficult depending on size. Ideally it may be best for each controller to have their own `json` file for maintainability.

### Current includes
- `main.md`
- `start.md` - handwritten documentation (needs review + plenty of changes)
- `reference.md` - swagger generated `json` converted to `markdown`
- `_errors.md` - leftovers from original slate fork

### Caching
To ensure end users always see the most recent content, browser caching should be disabled with response headers on the server hosting this single page application. _Only_ setting `<meta http-equiv="expires" content="0">` on the index.html page is typically insufficient since they are often ignored by proxies.

Recommended header:
`Cache-Control: max-age=0`

If you're hosting via AWS S3 the `Cache-Control: max-age=0` meta header needs set on each bucket individually, unless you've previsouly setup a shared Resource Group for implementing items such as this.

See:
* http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html#expiration-individual-objects
* https://docs.fastly.com/guides/tutorials/cache-control-tutorial

## Misc

### Potential Domain Names
##### Beecause Why Not?
- unified.industries
- unified.tools
- unified.guide
- unified.engineering / unified.engineer
- unified.how
- unified.wiki

### TO-DO
- [ ] Build theme-switcher (Ex. light versus dark themes)
- [ ] Better documentation
- [ ] Use only PostCSS + plugins for styles (remove SASS)
- [ ] Convert styles to mobile first _only_
- [ ] Migrate to webpack
