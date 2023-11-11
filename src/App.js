import OutputView from './views/OutputView.js';
import Menu from './Menu.js';

import { inputDate } from './dateCheck.js';
import { calculateTotalAmount } from './calculate.js';

class App {
  async run() {
    OutputView.printStart();
    const visitDate = await inputDate();
    const menu = new Menu();
    const menuLsit = await menu.ipnutMenu(visitDate);
    OutputView.printDate(visitDate);
    OutputView.printMenu(menuLsit);
    const totalPrice = await calculateTotalAmount(menuLsit);
    OutputView.printTotalAmount(totalPrice);
  }
}

export default App;
