var gulp = require('gulp'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    child = require('child_process');

var path = {
    HTML: 'src/*.html',
    JS: './src/js/app.js',
    JS_OUT_DEST: 'build/js/',
    JS_OUT_NAME: 'app.js',
    DEST_SRC: 'src',
    DEST_BUILD: 'build'
};

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end');
}

function buildScript(file, watch) {
    var props = {
        entries: [file],
        debug: true,
        cache: {},
        packageCache: {},
    };
    var bundler = watch ? watchify(browserify(props)) : browserify(props);
    bundler.transform(reactify);
    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', console.log.bind(console))
            .pipe(source(path.JS_OUT_NAME))
            .pipe(gulp.dest(path.JS_OUT_DEST));
    }
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}

gulp.task('html', function() {
    return gulp.src(path.HTML)
               .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('js', function() {
  return buildScript(path.JS, false);
});

gulp.task('server', function() {
    return child.spawn('node', ['server.js']);
});

gulp.task('watch', function() {
    gulp.watch(path.HTML, ['html']);
    return buildScript(path.JS, true);
});

gulp.task('build', ['html', 'js']);

gulp.task('serve', ['build', 'watch', 'server']);

gulp.task('default', ['serve']);
