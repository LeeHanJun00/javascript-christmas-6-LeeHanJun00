import Validator from './utils/Validator.js';
import { AMOUNT, DRINK } from './constants/Constant.js';
class Benefit {
  constructor() {
    this.totalDiscountPrice = 0;
    this.christmasDiscount = 0;
    this.giftEvent = 0;
    this.weekdayDiscount = 0;
    this.weekendDiscount = 0;
    this.specialDiscount = 0;
  }

  async benefitCheck(visitDate, menuLsit, totalPrice) {
    this.christmasDiscount = await this.checkChristmasDiscount(visitDate);
    this.giftEvent = await this.checkGiftEvent(totalPrice);
    this.weekdayDiscount = await this.checkWeekdayDiscount(visitDate, menuLsit);
    this.weekendDiscount = await this.checkWeekendDiscount(visitDate, menuLsit);
    this.specialDiscount = await this.checkSpecialDate(visitDate);
    this.totalDiscountPrice =
      this.christmasDiscount + this.giftEvent + this.weekdayDiscount + this.weekendDiscount + this.specialDiscount;
  }

  async checkChristmasDiscount(visitDate) {
    if (visitDate >= 1 && visitDate <= 25) {
      return await this.calculateChristmasDiscountAmount(visitDate);
    }

    return 0;
  }

  async calculateChristmasDiscountAmount(visitDate) {
    const discountAmount = (visitDate - 1) * AMOUNT.christmasDiscountIncrease + AMOUNT.christmasDiscountStart;

    return discountAmount;
  }

  async checkGiftEvent(totalPrice) {
    if (totalPrice >= AMOUNT.minimumOfGiftEvent) {
      return DRINK.샴페인;
    }

    return 0;
  }

  async calculateWeekdayDiscountAmount(menuLsit) {
    const numberOfDessert = Validator.countDesert(menuLsit);
    const discountAmount = numberOfDessert * AMOUNT.discountOnWeekendAndWeekday;

    return discountAmount;
  }

  async calculateWeekendDiscountAmount(menuLsit) {
    const numberOfMain = Validator.countMain(menuLsit);
    const discountAmount = numberOfMain * AMOUNT.discountOnWeekendAndWeekday;

    return discountAmount;
  }

  async checkWeekdayDiscount(visitDate, menuLsit) {
    if (Validator.checkWeekendOrWeekday(visitDate) === 'weekday') {
      const weekdayDiscountAmount = await this.calculateWeekdayDiscountAmount(menuLsit);

      return weekdayDiscountAmount;
    }

    return 0;
  }

  async checkWeekendDiscount(visitDate, menuLsit) {
    if (Validator.checkWeekendOrWeekday(visitDate) === 'weekend') {
      const weekendDiscountAmount = await this.calculateWeekendDiscountAmount(menuLsit);

      return weekendDiscountAmount;
    }

    return 0;
  }

  async checkSpecialDate(visitDate) {
    const amount = Validator.specialDate(visitDate);

    return amount;
  }
}
export default Benefit;
