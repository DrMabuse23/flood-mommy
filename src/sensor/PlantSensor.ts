import {Observable, TimeInterval} from '@reactivex/rxjs';
import {Sensor} from 'johnny-five';

export class PlantSensor {
  private sensor: Sensor;
  constructor(pin = 'A0') {
    this.sensor = new Sensor(pin);
  }

  data(): Observable<TimeInterval<number>> {
    const reader = Observable.fromEvent(<any>this.sensor, 'data');
    let oldsensor: any = null;
    reader.subscribe((value: any) => {
      // if (value !== oldsensor && value > 0) {
      //   console.log(value);
      // }
      if (value >= 0) {
        oldsensor = value;
      }
    });
    return Observable.interval(3000)
      .timeInterval()
      .distinctUntilChanged()
      .filter(() => oldsensor >= 0);
    }
}
