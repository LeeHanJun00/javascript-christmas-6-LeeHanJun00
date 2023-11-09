import { Console } from '@woowacourse/mission-utils';
import { MENU } from '../constants/Constant.js';

const OutputView = {
  printStart() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printMenu(menuLsit) {
    Console.print('\n<주문 메뉴>');
    for (const menu in menuLsit) {
      Console.print(`${menu} ${menuLsit[menu]}개`);
    }
  },

  totalAmount(menuLsit) {
    Console.print('\n<할인 전 총주문 금액>');
    let totalPrice = 0;
    for (const item in menuLsit) {
      if (MENU.hasOwnProperty(item)) {
        totalPrice += MENU[item] * menuLsit[item];
      }
    }
    const totalAmount = totalPrice.toLocaleString();
    Console.print(`${totalAmount}원`);

    return totalPrice;
  },
};

export default OutputView;
