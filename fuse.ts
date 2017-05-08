import {UglifyJSPlugin} from 'fuse-box';
import {FSWatcher} from 'chokidar';
import {FuseBox} from 'fuse-box';
import * as chokidar from 'chokidar';
import {Observable} from '@reactivex/rxjs';

const emoji = require('node-emoji');

class Watcher {
  public path: any;
  private options = {
    persistent: true,
    ignored: '*.txt',
    ignoreInitial: false,
    followSymlinks: true,
    cwd: '.',
    usePolling: true,
    interval: 100,
    binaryInterval: 300,
    alwaysStat: false,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    },
    ignorePermissionErrors: false,
    atomic: true // or a custom 'atomicity delay', in milliseconds (default 100)
  };
  watcher: FSWatcher;
  events: {[key: string]: Observable<any>} = {};

  constructor(path, options?) {

    if (options) {
      this.options = Object.assign(options, this.options);
    }
    // console.log(path, this.options);
    this.watcher = chokidar.watch(path, this.options);
    console.log(`${emoji.get('eyes')}  start watcher on ${path}`);
  }

  clearEvent(type) {
    const ev = this.events[type] || null;
    if (ev) {
      delete this.events[type];
    }
  }

  addEvent(type: 'change' | 'add' | 'unlink' | 'raw' | 'all' | string) {
    this.events[type] = Observable.fromEvent(<any>this.watcher, type);
    return this.events[type];
  }

  deConstruct() {
    console.log(`${emoji.get('eyes')}  close watcher.`);
    this.watcher.close();
  }
}

/**
 * @export
 * @class FloodMommyBundler
 */
export class FloodMommyBundler {

  private options: any = {
    homeDir: 'src/',
    tsConfig: './tsconfig.json',
    outFile: './dist/flood-mommy.js',
    plugins: [
      // [options] - UglifyJS2 options
      // UglifyJSPlugin({
      //   compress: true,
      //   mangle: false
      // }),
    ]
  };

  constructor() {
    this.bundleTypeScript().then(() => this.watcher());
  }

  /**
   * @param {string} [path='>**\/*.ts']
   * @returns
   *
   * @memberOf FloodMommyBundler
   */
  bundleTypeScript(path = '>**/*.ts') {
    return FuseBox
      .init(this.options)
      .bundle(path);
  }
  /**
   * @memberOf FloodMommyBundler
   */
  watcher() {
    const path = `${__dirname}/${this.options.homeDir}**/*.ts`;
    const watcher = new Watcher(path);
    watcher.addEvent('change')
    .do((_path: string) => console.log(`${emoji.get('v')}  changed ${_path.toString()}`))
    .throttleTime(200)
    .subscribe(
      (res) => {
        console.log(`${emoji.get('writing_hand')}  write`);
        this.bundleTypeScript()
          .then(() => console.log(`${emoji.get('100')}  written`));
      },
      e => console.error(`${emoji.get('skull_and_crossbones')}  oh sh..`, e)
    );
  }
}

const runner = new FloodMommyBundler();

