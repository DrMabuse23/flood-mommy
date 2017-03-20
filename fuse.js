"use strict";
var fuse_box_1 = require('fuse-box');
var chokidar = require('chokidar');
var rxjs_1 = require('@reactivex/rxjs');
var emoji = require('node-emoji');
var Watcher = (function () {
    function Watcher(path, options) {
        this.options = {
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
        this.events = {};
        if (options) {
            this.options = Object.assign(options, this.options);
        }
        // console.log(path, this.options);
        this.watcher = chokidar.watch(path, this.options);
    }
    Watcher.prototype.clearEvent = function (type) {
        var ev = this.events[type] || null;
        if (ev) {
            delete this.events[type];
        }
    };
    Watcher.prototype.addEvent = function (type) {
        var _this = this;
        this.events[type] = new rxjs_1.Observable(function (ob) {
            _this.watcher.on(type, function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                ob.next.apply(ob, params);
            });
        });
        // this.events[type] = Observable.fromEvent(<any>this.watcher, type);
        return this.events[type];
    };
    Watcher.prototype.deConstruct = function () {
        this.watcher.close();
    };
    return Watcher;
}());
var FloodMommyBundler = (function () {
    function FloodMommyBundler() {
        var _this = this;
        this.options = {
            homeDir: 'src/',
            tsConfig: 'tsconfig.json',
            sourcemaps: true,
            outFile: './dist/flood-mommy.js'
        };
        this.bundleTypeScript().then(function () { return _this.watcher(); });
    }
    FloodMommyBundler.prototype.bundleTypeScript = function (path) {
        if (path === void 0) { path = '>**/*.ts'; }
        return fuse_box_1.FuseBox
            .init(this.options)
            .bundle(path);
    };
    FloodMommyBundler.prototype.watcher = function () {
        var _this = this;
        var path = __dirname + "/" + this.options.homeDir + "**/*.ts";
        var watcher = new Watcher(path);
        watcher.addEvent('change')
            .do(function (_path) { return console.log(emoji.get('v') + " changed " + _path.toString()); })
            .throttleTime(200)
            .subscribe(function (res) {
            console.log(emoji.get('writing_hand') + " write");
            _this.bundleTypeScript()
                .then(function () { return console.log(emoji.get('100') + " written"); });
        }, function (e) { return console.error(emoji.get('skull_and_crossbones') + " oh sh..", e); });
    };
    return FloodMommyBundler;
}());
exports.FloodMommyBundler = FloodMommyBundler;
var runner = new FloodMommyBundler();
