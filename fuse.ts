import {FSWatcher} from 'chokidar';
import {FuseBox} from 'fuse-box';
import * as chokidar from 'chokidar';
import {Observable} from '@reactivex/rxjs';

const emoji = require('node-emoji');

class Watcher {
  public path : any;
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
  }

  clearEvent(type) {
    const ev = this.events[type] || null;
    if (ev) {
      delete this.events[type];
    }
  }

  addEvent(type: 'change' | 'add' | 'unlink') {
    this.events[type] = new Observable<any>((ob: any) => {
      this.watcher.on(type, (...params) => {
       ob.next(...params);
      });
    });
    // this.events[type] = Observable.fromEvent(<any>this.watcher, type);
    return this.events[type];
  }

  deConstruct() {
    this.watcher.close();
  }
}

export class FloodMommyBundler {
  private options: any = {
    homeDir: 'src/',
    tsConfig: 'tsconfig.json',
    sourcemaps: true,
    outFile: './dist/flood-mommy.js'
  };

  constructor() {
    this.bundleTypeScript().then(() => this.watcher());
  }

  bundleTypeScript(path = '>**/*.ts') {
    return FuseBox
      .init(this.options)
      .bundle(path);
  }

  watcher() {
    const path = `${__dirname}/${this.options.homeDir}**/*.ts`;
    const watcher = new Watcher(path);
    watcher.addEvent('change')
    .do((_path: string) => console.log(`${emoji.get('v')} changed ${_path.toString()}`))
    .throttleTime(200)
    .subscribe(
      (res) => {
        console.log(`${emoji.get('writing_hand')} write`);
        this.bundleTypeScript()
          .then(() => console.log(`${emoji.get('100')} written`));
      },
      e => console.error(`${emoji.get('skull_and_crossbones')} oh sh..`, e)
    );
  }
}

const runner = new FloodMommyBundler();

