var gulp = require('gulp');
var browserSync   = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer'); //自动添加css前缀
var size         = require('gulp-size');
var sourcemaps   = require('gulp-sourcemaps');
var header       = require('gulp-header');
var gutil        = require('gulp-util');
var pkg          = require('./package.json');



gulp.task('watch', function(){
    // 启动服务   API: http://www.browsersync.io/docs/options/
    browserSync.init({
        server: {
            baseDir: "./",                      // 配置目录
            directory: true                     // 是否显示文件目录
        },
        open: 'external',                       // 此配置 按照本地IP打开(需要连网)
        startPath: './',
        port: 8654
    });


    gulp.watch("*.{html,htm}", function(){
        browserSync.reload();
    });

    gulp.watch('assets/sass/**/*.scss', ['sass']);
});


gulp.task('sass', function(){
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['ios >= 6', 'android >= 4.0']
        }))
        .pipe(sourcemaps.write())
        .pipe(header(pkg.banner,{pkg: pkg}))
        .pipe(size({title: 'styles',gzip: true}))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream())
        .on('end', function(){
            gutil.log(gutil.colors.magenta('sass 编译完成'));
        });
});
