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
  async checkMinimumConditionsToBenefit(visitDate, menuLsit, totalPrice) {
    if (totalPrice < AMOUNT.minimumOfEvent) {
      return;
    }

    if (totalPrice >= AMOUNT.minimumOfEvent) {
      return this.benefitCheck(visitDate, menuLsit, totalPrice);
    }
  }

  benefitCheck(visitDate, menuLsit, totalPrice) {
    this.christmasDiscount = this.checkChristmasDiscount(visitDate);
    this.giftEvent = this.checkGiftEvent(totalPrice);
    this.weekdayDiscount = this.checkWeekdayDiscount(visitDate, menuLsit);
    this.weekendDiscount = this.checkWeekendDiscount(visitDate, menuLsit);
    this.specialDiscount = this.checkSpecialDate(visitDate);
    this.totalDiscountPrice =
      this.christmasDiscount + this.giftEvent + this.weekdayDiscount + this.weekendDiscount + this.specialDiscount;
  }

  checkChristmasDiscount(visitDate) {
    if (visitDate >= 1 && visitDate <= 25) {
      return this.calculateChristmasDiscountAmount(visitDate);
    }

    return 0;
  }

  calculateChristmasDiscountAmount(visitDate) {
    const discountAmount = (visitDate - 1) * AMOUNT.christmasDiscountIncrease + AMOUNT.christmasDiscountStart;

    return discountAmount;
  }

  checkGiftEvent(totalPrice) {
    if (totalPrice >= AMOUNT.minimumAmountOfGiftEvent) {
      return DRINK.샴페인;
    }

    return 0;
  }

  checkWeekdayDiscount(visitDate, menuLsit) {
    if (Validator.checkWeekendOrWeekday(visitDate) === 'weekday') {
      const weekdayDiscountAmount = this.calculateWeekdayDiscountAmount(menuLsit);

      return weekdayDiscountAmount;
    }

    return 0;
  }

  calculateWeekdayDiscountAmount(menuLsit) {
    const numberOfDessert = Validator.countDessert(menuLsit);
    const discountAmount = numberOfDessert * AMOUNT.discountOnWeekendAndWeekday;

    return discountAmount;
  }

  checkWeekendDiscount(visitDate, menuLsit) {
    if (Validator.checkWeekendOrWeekday(visitDate) === 'weekend') {
      const weekendDiscountAmount = this.calculateWeekendDiscountAmount(menuLsit);

      return weekendDiscountAmount;
    }

    return 0;
  }

  calculateWeekendDiscountAmount(menuLsit) {
    const numberOfMain = Validator.countMain(menuLsit);
    const discountAmount = numberOfMain * AMOUNT.discountOnWeekendAndWeekday;

    return discountAmount;
  }

  checkSpecialDate(visitDate) {
    if (Validator.specialDate(visitDate) !== 'SPECIALDATE') {
      return 0;
    }

    return AMOUNT.specialDateDiscount;
  }
}
export default Benefit;
