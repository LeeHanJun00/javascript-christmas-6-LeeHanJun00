import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Menu from './Menu.js';
import Benefit from './Benefit.js';
import { inputDate } from './dateCheck.js';

class App {
  async run() {
    OutputView.printStart();
    const visitDate = await inputDate();

    const menu = new Menu();
    const menuLsit = await menu.ipnutMenu(visitDate);

    OutputView.printDate(visitDate);

    OutputView.printMenu(menuLsit);
    const totalPrice = OutputView.totalAmount(menuLsit);

    const benefit = new Benefit(visitDate, menuLsit, totalPrice);
    const benefitLsit = await benefit.benefitCheck();
  }
}

export default App;
