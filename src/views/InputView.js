import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constant.js';

const InputView = {
  async inputDate() {
    const input = await Console.readLineAsync(MESSAGE.enterVisitDate);

    return input;
  },

  async inputMenu() {
    const input = await Console.readLineAsync(MESSAGE.enterMenu);
    return input;
  },
  // ...
};

export default InputView;
