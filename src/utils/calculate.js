import { MENU } from '../constants/Constant.js';

export const calculateTotalAmount = async (menuList) => {
  const totalPrice = Object.keys(menuList).reduce((acc, item) => {
    if (MENU.hasOwnProperty(item)) {
      return acc + MENU[item] * menuList[item];
    }
    return acc;
  }, 0);

  return totalPrice;
};

export const calculateAfterDiscountAmount = async (totalPrice, benefit) => {
  const totalDiscountAmount = Object.keys(benefit)
    .filter((key) => key !== 'giftEvent' && key !== 'totalDiscountPrice')
    .reduce((total, key) => total + benefit[key], 0);

  const amount = totalPrice - totalDiscountAmount;

  return amount;
};
