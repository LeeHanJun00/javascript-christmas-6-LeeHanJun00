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
};

export default OutputView;
