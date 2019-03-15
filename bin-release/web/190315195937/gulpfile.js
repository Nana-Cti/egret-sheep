var gulp=require('gulp'),  //gulp基础库
    concat=require('gulp-concat');  //合并文件

    gulp.task('default',function(){
            return gulp.src([
                "js/egret.min_1f88eb98.js",
                "js/egret.web.min_2dd0bd72.js",
                "js/game.min_45aa06f6.js",
                "js/tween.min_6c5a88f9.js",
                "js/assetsmanager.min_f2e50bd1.js",
                "js/dragonBones.min_6252b9c4.js",
                "js/promise.min_83a6a5d.js",
                "js/particle.min_27fe451d.js",
                "js/main.min_8080759f.js"
            ])  //选择合并的JS
            .pipe(concat('index.js'))   //合并js
            .pipe(gulp.dest('dist/js'))         //输出
    });
    