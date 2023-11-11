// import { MAIN_MENU } from './constants/Constant.js';
import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';

class Menu {
  async checkMenu() {
    try {
      const userInputMenu = await InputView.inputMenu();
      const menuList = await this.splitUserInputMenu(userInputMenu);
      await this.validate(menuList);

      return menuList;
    } catch (error) {
      Console.print(error.message);

      return this.checkMenu();
    }
  }

  async splitUserInputMenu(userInputMenu) {
    const splitUserInputMenu = userInputMenu.split(',');
    const menuList = splitUserInputMenu.reduce((acc, str) => {
      const [name, value] = str.split('-');
      acc[name] = parseFloat(value);

      return acc;
    }, {});

    return menuList;
  }

  async validate(menuList) {
    Validator.checkMenuName(menuList);
    Validator.checkSameMenuName(menuList);
    Validator.checkOnlyOrderDrink(menuList);
    Validator.checkNumberOfMenus(menuList);
    Validator.checkMaxOrder(menuList);
  }
}

export default Menu;
