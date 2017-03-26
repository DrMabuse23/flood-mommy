/**
 * @module Core
 */
import { Mega2560Uno } from '../boards';
import { Sensor, Led, BoardOptions } from 'johnny-five';
import { Observable } from '@reactivex/rxjs';


/**
 * @export
 * @class FloodRunner
 */
export class FloodRunner {
  private _board: Mega2560Uno;

  constructor() {
    this._board = new Mega2560Uno();
    this._board.on('ready', this.boardReady.bind(this));
    this._board.on('connect', this.connected.bind(this));
    this._board.on('error', this.error.bind(this));
  }

  boardReady(event: any) {
    debugger;
    // const led13 = new Led(13);
    const led11 = new Led(13);
    console.log('ready', event);
    var sensor = new Sensor("A0");
    let oldsensor: any = null;
    // When the sensor value changes, log the value
    const reader = Observable.fromEvent(<any>sensor, 'data');
    reader.subscribe((value: any) => {
      // if (value !== oldsensor && value > 0) {
      //   console.log(value);
      // }
      if (value >= 0) {
        oldsensor = value;
      }
    });
    Observable.interval(3000).timeInterval().distinctUntilChanged().filter(() => oldsensor >= 0).subscribe(
      () => {
        console.log(oldsensor);
        led11.on();
        led11.pulse(100);
        led11.stop(200);
        led11.off();
      },
      e => e,
      () => { }
    );
    // sensor.on("data", (value: any) => {
    //   //debugger;
    //   if (value !== oldsensor && value > 0) {
    //     console.log(value);
    //   }
    //   if (value >= 0) {
    //     oldsensor = value;
    //   }

    //   //debugger;
    //   return;
    // });

    // test blink led 13 3 times
    // const loop: any = Observable
    //   .interval(500)
    //   // .map(() => led11.on())
    //   .map(() => led11.blink(33233))
    //   // .do(() => led11.stop(0))
    //   .take(3)
    //   .last();

    //   loop.subscribe(
    //     (wtf: any) => console.log('möü'),
    //     (e: any) => console.error(e),
    //     () => loop.subscribe()
    //   );
  }

  connected(event: any) {
    console.log('connected', event);
  }

  error(e: Error) {
    console.error(e);
  }
}

const runner = new FloodRunner();
