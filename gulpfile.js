'use strict';

var runSequence    = require( 'run-sequence' );
var gulp           = require( 'gulp' );
var sass           = require( 'gulp-sass' );
var svgSpriteSheet = require( 'gulp-svg-spritesheet' );

gulp.task( 'svgSprite', function () {

  var SVGSize = 128;

  return gulp.src( [ './src/SVGSprite/*.svg' ] )
  .pipe( svgSpriteSheet( {
    cssPathSvg: '../SVGSprite.svg',
    padding: 0,
    pixelBase: SVGSize,
    positioning: 'packed',
    templateSrc: './src/SVGSprite/_template.scss',
    templateDest: './src/scss/_SVGSprite.scss',
    units: 'em'
  } ) )
  .pipe( gulp.dest( './build/SVGSprite.svg' ) );

} );


gulp.task( 'sass', function () {

  return gulp.src( './src/scss/style.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './build/css/' ) );

} );


gulp.task( 'build', function () {

  runSequence( 'svgSprite', 'sass' );

} );
