import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Menu from './Menu.js';

class App {
  async run() {
    OutputView.printStart();

    const visitDate = await InputView.inputDate();

    const menu = new Menu();
    const menuLsit = await menu.ipnutMenu();

    OutputView.printMenu(menuLsit);
    const totalPrice = OutputView.totalAmount(menuLsit);
  }
}

export default App;
