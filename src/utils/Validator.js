import { ERROR } from '../constants/Constant.js';
import { MENU, DRINK, DESERT, MAIN, SPECIAL_DATE } from '../constants/Constant.js';
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

    if (!Number.isInteger(date) || isNaN(userInput)) {
      throw new Error(ERROR.ipnutDate);
    }

    return;
  }

  static checkSameMenuName(userInputMenu) {
    const menuNameArray = userInputMenu.map((item) => {
      const [name] = item.split('-');

      return name;
    });

    const setMenuArray = new Set(menuNameArray);
    if (setMenuArray.size !== menuNameArray.length) {
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

      return;
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

  static checkWeekendOrWeekday(visitDate) {
    const date = new Date(2023, 11, visitDate);
    if (date.getDay() >= 0 && date.getDay() <= 4) {
      return 'weekday';
    }

    return 'weekend';
  }

  static countDesert(menuLsit) {
    let dessertCount = 0;
    for (const item in menuLsit) {
      if (DESERT.hasOwnProperty(item)) {
        dessertCount += menuLsit[item];
      }
    }

    return dessertCount;
  }

  static countMain(menuLsit) {
    let mainCount = 0;
    for (const item in menuLsit) {
      if (MAIN.hasOwnProperty(item)) {
        mainCount += menuLsit[item];
      }
    }

    return mainCount;
  }

  static specialDate(visitDate) {
    const date = parseFloat(visitDate);
    if (SPECIAL_DATE.includes(date)) {
      return 1000;
    }

    return 0;
  }
}

export default Validator;
