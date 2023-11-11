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

export const calculateAfterDiscountAmount = async (totalPrice, benefit) => {
  const totalDiscountAmount = Object.keys(benefit)
    .filter((key) => key !== 'giftEvent' && key !== 'totalDiscountPrice')
    .reduce((total, key) => total + benefit[key], 0);

  const amount = totalPrice - totalDiscountAmount;

  return amount;
};
