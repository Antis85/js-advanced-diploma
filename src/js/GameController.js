//  temp Bowman import:
import Bowman from './Bowman';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi('prairie');
    //  temp redrawPositions:
    this.gamePlay.redrawPositions([
      { character: new Bowman(1), position: 0 },
      { character: new Bowman(1), position: 1 },
    ]);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
