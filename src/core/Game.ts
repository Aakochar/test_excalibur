import { Engine, Resolution, Loader } from 'excalibur';
import { Player } from './Player';
import { Resources } from './Resources';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const IS_SMOOTH = false;

export class Game extends Engine {
  constructor() {
    super({
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      resolution: Resolution.SNES,
      snapToPixel: true,
    });

    // for pixel art
    this.setAntialiasing(IS_SMOOTH);
  }

  initialize() {
    // adding items
    const player = new Player();
    this.add(player);

    // start loading
    const loader = new Loader([Resources.test]);
    this.start(loader);
  }
}
