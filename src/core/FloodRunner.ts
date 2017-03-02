import {Mega2560} from '../boards';
import {Led, BoardOptions} from 'johnny-five';
import {Observable} from '@reactivex/rxjs';

/**
 * @module Core
 */
/**
 * @export
 * @class FloodRunner
 */
export class FloodRunner {
  private _board: Mega2560;

  constructor() {
    this._board = new Mega2560();
    this._board.on('ready', this.boardReady.bind(this));
    this._board.on('connect', this.connected.bind(this));
    this._board.on('error', this.error.bind(this));
  }

  boardReady(event: any) {
    // const led13 = new Led(13);
    const led11 = new Led(11);
    console.log('ready', event);

    // test blink led 13 3 times
    Observable
      .interval(500)
      .map(() => led11.pulse(233))
      .do(() => led11.stop(0))
      .take(3)
      .last()
      .subscribe(
        (wtf: any) => console.log(wtf),
        (e) => console.error(e),
        () => led11.off()
      );
  }

  connected(event: any) {
    console.log('connected', event);
  }

  error(e: Error) {
    console.error(e);
  }
}

const runner = new FloodRunner();
