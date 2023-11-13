import OutputView from './views/OutputView.js';
import Menu from './Menu.js';
import Benefit from './Benefit.js';
import { dateCheck } from './utils/dateCheck.js';
import { calculateAfterDiscountAmount, calculateTotalAmount } from './utils/calculate.js';
import Validator from './utils/Validator.js';
import { AMOUNT } from './constants/Constant.js';

class App {
  constructor() {
    this.visitDate;
    this.menuLsit;
    this.totalPrice;
  }

  async run() {
    OutputView.printStart();

    await this.startIputDate();
    await this.startInputMenu();

    OutputView.printDate(this.visitDate);
    OutputView.printMenu(this.menuLsit);

    this.totalPrice = await calculateTotalAmount(this.menuLsit);
    OutputView.printTotalAmount(this.totalPrice);

    await this.startPreviewBenefits();
  }

  async startIputDate() {
    this.visitDate = await dateCheck();
  }

  async startInputMenu() {
    const menu = new Menu();
    this.menuLsit = await menu.checkMenu(this.visitDate);
  }
  async judgeBenefit(totalPrice) {
    if (totalPrice > AMOUNT.minimumPriceOfEvent) {
    }
  }

  async startPreviewBenefits() {
    const benefit = new Benefit();
    await benefit.checkMinimumConditionsToBenefit(this.visitDate, this.menuLsit, this.totalPrice);

    OutputView.printGiftMenu(benefit.giftEvent);
    OutputView.printBenefit(benefit);
    OutputView.printTotalBenefitAmount(benefit.totalDiscountPrice);

    const afterDiscountPrice = await calculateAfterDiscountAmount(this.totalPrice, benefit);
    OutputView.printAfterDiscount(afterDiscountPrice);

    const bedgeName = Validator.eventBedge(benefit.totalDiscountPrice);
    OutputView.printEventBedge(bedgeName);
  }
}

export default App;
