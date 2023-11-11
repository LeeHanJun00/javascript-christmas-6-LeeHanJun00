import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';

class Menu {
  async checkMenu() {
    try {
      const userInputMenu = await InputView.inputMenu();
      const splitCommaUserInputMenu = userInputMenu.split(',');
      await this.checkSameMenuName(splitCommaUserInputMenu);
      const menuList = await this.splitUserInputMenu(splitCommaUserInputMenu);
      await this.validate(menuList);

      return menuList;
    } catch (error) {
      Console.print(error.message);

      return this.checkMenu();
    }
  }

  async splitUserInputMenu(userInputMenu) {
    const menuList = userInputMenu.reduce((acc, str) => {
      const [name, value] = str.split('-');
      acc[name] = parseFloat(value);

      return acc;
    }, {});

    return menuList;
  }

  async checkSameMenuName(userInputMenu) {
    Validator.checkSameMenuName(userInputMenu);
  }

  async validate(menuList) {
    Validator.checkMenuName(menuList);
    Validator.checkOnlyOrderDrink(menuList);
    Validator.checkNumberOfMenus(menuList);
    Validator.checkMaxOrder(menuList);
  }
}

export default Menu;
