import { Board, BoardOptions } from 'johnny-five';

export class Mega2560Uno extends Board {
  constructor(option?: BoardOptions) {
    super(option);
  }
}
