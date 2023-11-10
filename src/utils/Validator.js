import { ERROR } from '../constants/Constant.js';
import { MENU, DRINK } from '../constants/Constant.js';
class Validator {
  static checkMenuName(userInput) {
    const userInputNames = Object.keys(userInput);
    const MENU_NAMES = Object.keys(MENU);

    if (userInputNames.length !== MENU_NAMES.filter((name) => userInputNames.includes(name)).length) {
      throw new Error(ERROR.inputMenu);
    }

    return;
  }

  static checkDate(userInput) {
    const date = parseFloat(userInput);
    if (userInput < 1 || userInput > 31) {
      throw new Error(ERROR.ipnutDate);
    }

    if (!Number.isInteger(date)) {
      throw new Error(ERROR.ipnutDate);
    }

    return;
  }

  static checkSameMenuName(userInput) {
    const userInputNames = Object.keys(userInput);
    const setUserInputNames = new Set(userInputNames);

    if (setUserInputNames.size !== userInputNames.length) {
      throw new Error(ERROR.inputMenu);
    }

    return;
  }

  static checkOnlyOrderDrink(userInput) {
    const userInputNames = Object.keys(userInput);
    const DRINK_NAMES = Object.keys(DRINK);

    if (userInputNames.length === DRINK_NAMES.filter((name) => userInputNames.includes(name)).length) {
      throw new Error(ERROR.inputMenu);
    }

    return;
  }

  static checkNumberOfMenus(userInput) {
    const numberOfMenus = Object.values(userInput);

    numberOfMenus.forEach((number) => {
      if (isNaN(number) || !Number.isInteger(number) || number < 1) {
        throw new Error(ERROR.inputMenu);
      }
    });

    return;
  }

  static checkMaxOrder(userInput) {
    const numberOfMenus = Object.values(userInput);
    const totalNumberOfMenus = numberOfMenus.reduce((acc, curr) => acc + curr, 0);
    if (totalNumberOfMenus > 20) {
      throw new Error(ERROR.inputMenu);
    }

    return;
  }
}

export default Validator;
