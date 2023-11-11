import OutputView from './views/OutputView.js';
import Menu from './Menu.js';
import Benefit from './Benefit.js';
import { inputDate } from './dateCheck.js';
import { calculateTotalAmount, calculateAfterDiscountAmount } from './calculate.js';

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
    const benefit = new Benefit();
    await benefit.benefitCheck(visitDate, menuLsit, totalPrice);
    OutputView.printGiftMenu(benefit.giftEvent);
    OutputView.printBenefit(benefit);
    OutputView.printTotalBenefitAmount(benefit.totalDiscountPrice);
    const afterDiscountPrice = await calculateAfterDiscountAmount(totalPrice, benefit);
    OutputView.printAfterDiscount(afterDiscountPrice);
    OutputView.printEventBedge(benefit.totalDiscountPrice);
  }
}

export default App;
