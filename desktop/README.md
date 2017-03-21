# electron-fuse-box-babel-live-reload-boilerplate

![](https://trello-attachments.s3.amazonaws.com/54d96ae8cd8a263bf8dd70e9/58a0583c279a6110be1355d0/a7b637438dda91ad590e31be419c6063/Made_with_Love.gif)

**Clone and run for minimum config.**

This is a minimal Electron boilerplate to bundle your code via [fuse-box](http://fuse-box.org/). It uses [`gulp`](https://github.com/gulpjs/gulp) to check for changes in your `src` folder and live-reloads it with [`electron-connect`](https://github.com/Quramy/electron-connect).
The babel preset is `es2015` but you can go ahead and use any you want like `latest`.

Hope this boilerplate helps!



## To Use

```bash
# Clone this repository
git clone https://github.com/arekusunaito/electron-fuse-box-babel-live-reload-boilerplate
# Go into the repository
cd <your project name>
# Install dependencies
npm install
# Run the app
gulp
```

Check the `gulpfile` for bundling and live-reloading.
Check `main.js` on function `createWindow()` for `electron-connect`'s client

## Special Thanks
- [The fuse-box guys](https://github.com/fuse-box)
- [Quramy for electron-connect](https://github.com/Quramy/electron-connect)
- [Gulp](https://github.com/gulpjs/gulp)
