import { Actor, vec } from 'excalibur';
import { Resources } from './Resources';

export class Player extends Actor {
  constructor() {
    super({
      width: 50,
      height: 50,
      pos: vec(150, 150),
    });
  }

  public onInitialize() {
    this.graphics.use(Resources.test.toSprite());
  }
}

// Actors implement an EventDispatcher (Actor.eventDispatcher) so they can send and receive events.
// You can emit any kind of event for your game just by using a custom string value and implementing a class that inherits from GameEvent.