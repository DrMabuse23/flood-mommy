import {FuseBox} from 'fuse-box';
FuseBox.init({
  homeDir: "src/",
  sourceMap: {
    bundleReference: "./sourcemaps.js.map",
    outFile: "sourcemaps.js.map"
  },
  outFile: "./dist/flood-mommy.js"
}).bundle(">index.ts");