//This just manually bundles your code using `node fuse.js`
const fsbx = require("fuse-box");
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourcemaps : true,
    outFile: "./build/bundle.js",
    tsConfig: 'tsconfig.json',
    plugins: [
        fsbx.JSONPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["babili", "es2015"]
            }
        })
    ]
});

fuseBox.bundle(">**/*.{ts|tsx}");
