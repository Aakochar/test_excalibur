import { ImageSource, Sound } from 'excalibur';
import testSprite from '../assets/Sprite_1.png';
import music from '../assets/Saxxon Pike - Broken.mp3';

const Resources = {
  test: new ImageSource(testSprite),
  track: new Sound(music),
};

export { Resources };