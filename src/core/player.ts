import { Actor, ImageSource } from 'excalibur';

const image = new ImageSource('./assets/Sprite_1.png');

export class Player extends Actor {
  public onInitialize() {
    this.graphics.use(image.toSprite());
  }
}

// Actors implement an EventDispatcher (Actor.eventDispatcher) so they can send and receive events.
// You can emit any kind of event for your game just by using a custom string value and implementing a class that inherits from GameEvent.