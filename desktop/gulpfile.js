'use strict';

const fsbx = require("fuse-box");
const gulp = require('gulp');
const electron = require('electron-connect')
  .server
  .create();
let fuseBox = new fsbx.FuseBox({
  homeDir: "src/",
  sourcemaps: true,
  outFile: "./build/bundle.js",
  plugins: [
    fsbx.JSONPlugin(),
    fsbx.BabelPlugin({
      config: {
        sourceMaps: true,
        presets: [
          "transform-react-jsx",
          "es2015",
          "babili"
        ]
      }
    })
  ]
});

gulp.task("bundle", () => {
  fuseBox.bundle('>**.ts*')
});

gulp.task('default', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);

  // Reload renderer when anything on the src folder changes, bundle it and then
  // reload electron gulp.watch(['src/**/*.**', './build/index.html'],['bundle'])
  gulp.watch([
    'src/**/*.**', './build/index.html'
  ], ['bundle', electron.reload]);
});
