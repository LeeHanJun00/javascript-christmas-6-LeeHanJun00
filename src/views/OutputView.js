import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printDate(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  printMenu(menuLsit) {
    Console.print('\n<주문 메뉴>');
    for (const menu in menuLsit) {
      Console.print(`${menu} ${menuLsit[menu]}개`);
    }
  },

  printTotalAmount(totalPrice) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${totalPrice.toLocaleString()}원`);
  },

  printGiftMenu(benefit) {
    Console.print('\n<증정 메뉴>');
    if (benefit === 25000) {
      Console.print(`샴페인 1개`);
    }

    if (benefit === 0) {
      Console.print(`없음`);
    }
  },

  printBenefit(benefit) {
    Console.print('\n<혜택 내역>');
    if (benefit.christmasDiscount > 0)
      Console.print(`크리스마스 디데이 할인: -${benefit.christmasDiscount.toLocaleString()}원`);
    if (benefit.giftEvent > 0) Console.print(`증정 이벤트: -${benefit.giftEvent.toLocaleString()}원`);
    if (benefit.weekdayDiscount > 0) Console.print(`평일 할인: -${benefit.weekdayDiscount.toLocaleString()}원`);
    if (benefit.weekendDiscount > 0) Console.print(`주말 할인: -${benefit.weekendDiscount.toLocaleString()}원`);
    if (benefit.specialDiscount > 0) Console.print(`특별 할인: -${benefit.specialDiscount.toLocaleString()}원`);
    if (Object.values(benefit).every((value) => value === 0)) {
      Console.print('없음');
    }
  },

  printTotalBenefitAmount(amount) {
    Console.print('\n<총혜택 금액>');
    if (amount === 0) {
      Console.print(`0원`);
    }

    if (amount > 0) {
      Console.print(`-${amount.toLocaleString()}원`);
    }
  },

  printAfterDiscount(afterDiscountPrice) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${afterDiscountPrice.toLocaleString()}원`);
  },

  printEventBedge(totalDiscountPrice) {
    Console.print('\n<12월 이벤트 배지>');
    if (totalDiscountPrice >= 5000 && totalDiscountPrice < 10000) Console.print('별');
    if (totalDiscountPrice >= 10000 && totalDiscountPrice < 20000) Console.print('트리');
    if (totalDiscountPrice >= 20000) Console.print('산타');
    if (totalDiscountPrice < 5000) Console.print('없음');
  },
};

export default OutputView;
