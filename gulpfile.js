const gulp = require('gulp');
const sass = require('gulp-sass');
const svgSpriteSheet = require('gulp-svg-spritesheet');
const SVGSize = 128;

gulp.task(
  'svgSprite',
  () => gulp.src(['./src/SVGSprite/*.svg'])
    .pipe(svgSpriteSheet({
      cssPathSvg: '../SVGSprite.svg',
      padding: 10,
      pixelBase: SVGSize,
      positioning: 'packed',
      templateSrc: './src/SVGSprite/_template.scss',
      templateDest: './src/scss/_SVGSprite.scss',
      units: 'em',
    }))
    .pipe(gulp.dest('./build/SVGSprite.svg')),
);

gulp.task(
  'sass',
  () => gulp.src('./src/scss/style.scss')
    .pipe( sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/')),
);

gulp.task(
  'build',
  gulp.series('svgSprite', 'sass'),
);
