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
};

export default OutputView;
