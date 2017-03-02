"use strict";
const boards_1 = require('../boards');
const johnny_five_1 = require('johnny-five');
const rxjs_1 = require('@reactivex/rxjs');
/**
 * @module Core
 */
/**
 * @export
 * @class FloodRunner
 */
class FloodRunner {
    constructor() {
        this._board = new boards_1.Mega2560();
        this._board.on('ready', this.boardReady.bind(this));
        this._board.on('connect', this.connected.bind(this));
        this._board.on('error', this.error.bind(this));
    }
    boardReady(event) {
        // const led13 = new Led(13);
        const led11 = new johnny_five_1.Led(11);
        console.log('ready', event);
        // test blink led 13 3 times
        rxjs_1.Observable
            .interval(500)
            .map(() => led11.pulse(233))
            .do(() => led11.stop(0))
            .take(3)
            .last()
            .subscribe((wtf) => console.log(wtf), (e) => console.error(e), () => led11.off());
    }
    connected(event) {
        console.log('connected', event);
    }
    error(e) {
        console.error(e);
    }
}
exports.FloodRunner = FloodRunner;
const runner = new FloodRunner();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvb2RSdW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29yZS9GbG9vZFJ1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUJBQXVCLFdBQVcsQ0FBQyxDQUFBO0FBQ25DLDhCQUFnQyxhQUFhLENBQUMsQ0FBQTtBQUM5Qyx1QkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQzs7R0FFRztBQUNIOzs7R0FHRztBQUNIO0lBR0U7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQiw2QkFBNkI7UUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQkFBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDRCQUE0QjtRQUM1QixpQkFBVTthQUNQLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDYixHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLElBQUksRUFBRTthQUNOLFNBQVMsQ0FDUixDQUFDLEdBQVEsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUM5QixDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUN2QixNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVE7UUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBcENZLG1CQUFXLGNBb0N2QixDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9