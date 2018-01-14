var  gulp=require("gulp");
//var  concat=require("gulp-concat");
var  sass=require("gulp-sass");

gulp.task("sass",function(){
	
	gulp.src("src/index.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css/"))
});

gulp.task("sign",function(){
	
	gulp.src("src/signIn.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css/"))
});
gulp.task("login",function(){
	
	gulp.src("src/login.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css/"))
})