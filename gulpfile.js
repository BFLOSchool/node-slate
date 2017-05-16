var fs = require('fs');

var gulp = require('gulp');

var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var browsersync = require('browser-sync').create();

var concat = require('gulp-concat');
var ejs = require('gulp-ejs');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var highlight = require('highlight.js');
var marked = require('marked');
var yaml = require('js-yaml');

var renderer = new marked.Renderer();

renderer.code = function (code, language) {
  var highlighted = language ? highlight.highlight(language, code).value
                             : highlight.highlightAuto(code).value;

  return '<pre class="highlight ' + language + '"><code>' + highlighted + '</code></pre>';
};

var readIndexYml = function() {
  return yaml.safeLoad(fs.readFileSync('./src/index.yml', 'utf8'));
};

var getPageData = function() {
  var config = readIndexYml();

  var includes = config.includes
        .map(function(include) { return './src/includes/' + include + '.md'; })
        .map(function(include) { return fs.readFileSync(include, 'utf8'); })
        .map(function(include) { return marked(include, { renderer: renderer }); });

  return {
    current_page: {
      data: config
    },
    page_classes: '',
    includes: includes,
    image_tag: function(filename, alt, className) {
      return '<img alt="' + alt + '" class="' + className + '" src="images/' + filename + '">';
    },
    javascript_include_tag: function(name) {
      return '<script src="js/' + name + '.min.js" rel="async" type="text/javascript"></script>';
    },
    stylesheet_link_tag: function(name, media) {
      return '<link href="css/' + name + '.min.css" rel="stylesheet" type="text/css" media="' + media + '" />';
    },
    langs: (config.language_tabs || []).map(function(lang) {
      return typeof lang == 'string' ? lang : lang.keys.first;
    })
  };
};

gulp.task('js', function() {
  var config = readIndexYml();
  var libs = [
    './src/js/lib/_energize.js',
    './src/js/lib/_jquery.js',
    './src/js/lib/_jquery_ui.js',
    './src/js/lib/_jquery.tocify.js',
    './src/js/lib/_imagesloaded.min.js',
  ];
  var scripts = [
    './src/js/app/_lang.js',
    './src/js/app/_toc.js',
  ];

  if (config.search) {
    libs.push('./src/js/lib/_lunr.js');
    libs.push('./src/js/lib/_jquery.highlight.js');
    libs.push('./src/js/app/_search.js');
  }

  return gulp.src(libs.concat(scripts))
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function () {
    var processors = [
        autoprefixer({ browsers: ['last 2 versions'] }),
        cssnano()
    ];
    gulp.src('./src/css/*.css')
      .pipe(sass())
      .pipe(sourcemaps.init())
      .pipe(postcss(processors))
      .pipe(concat('styles.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./build/css'))
      .pipe(browsersync.stream());
    });

gulp.task('highlightjs', function () {
  var config = readIndexYml();
  var path = './node_modules/highlight.js/styles/' + config.highlight_theme + '.css';
  return gulp.src(path)
    .pipe(rename('syntax-theme.css'))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('html', function () {
  var data = getPageData();
  return gulp.src('./src/*.html')
  	.pipe(ejs(data).on('error', gutil.log))
  	.pipe(gulp.dest('./build'));
});

gulp.task('copy-static-files', function () {
    gulp.src('./src/robots.txt')
        .pipe(gulp.dest('./build'))
});

gulp.task('browser-sync', function() {
    browsersync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('default', ['copy-static-files', 'highlightjs', 'js', 'sass', 'html']);

gulp.task('serve', ['sass', 'default'], function() {

    browsersync.init({
        server: "./build"
    });

    gulp.watch('./src/js/**/*', ['js']);
    gulp.watch('./src/css/**/**/*', ['sass']);
    gulp.watch('./src/index.yml', ['highlightjs', 'js', 'html']);
    gulp.watch(['./src/*.html', './src/includes/**/*'], ['html']).on('change', browsersync.reload);
  });
