import { Scene, ScreenElement } from 'excalibur';

class StartButton extends ScreenElement {}

export class MainMenu extends Scene {
  private _startButton: StartButton | null = null;

  /**
   * Start-up logic, called once
   */
  public onInitialize() {
    // initialize scene actors
    this._startButton = new StartButton();
    this.add(this._startButton);
  }
}
