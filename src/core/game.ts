import { Engine } from 'excalibur';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export class Game extends Engine {
  constructor() {
    super({
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    });
  }
}
