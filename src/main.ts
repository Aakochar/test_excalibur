import { Player } from './core/player';
// import { DevTool } from '@excaliburjs/dev-tools';

import { Game } from './core/game';

const game = new Game();
const player = new Player();

game.add(player);
game.start();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const devtool = new DevTool(game);

// Call Engine.showDebug with a true or false to enable or disable Excalibur's debug feature.
// This will enable actor debug drawing to help diagnose drawing issues.