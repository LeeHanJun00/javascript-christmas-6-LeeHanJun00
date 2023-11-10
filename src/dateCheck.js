import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Validator from './utils/Validator.js';

export const inputDate = async () => {
  try {
    const visitDate = await InputView.inputDate();
    await validate(visitDate);

    return visitDate;
  } catch (error) {
    Console.print(error.message);

    return inputDate();
  }
};

const validate = async (input) => {
  Validator.checkDate(input);

  return;
};
