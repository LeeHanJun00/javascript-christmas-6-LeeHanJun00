import { MENU } from './constants/Constant.js';

export const calculateTotalAmount = async (menuLsit) => {
  let totalPrice = 0;
  for (const item in menuLsit) {
    if (MENU.hasOwnProperty(item)) {
      totalPrice += MENU[item] * menuLsit[item];
    }
  }

  return totalPrice;
};
