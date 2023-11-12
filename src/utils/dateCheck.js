import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Validator from './Validator.js';

export const dateCheck = async () => {
  try {
    const visitDate = await InputView.inputDate();
    await validate(visitDate);

    return visitDate;
  } catch (error) {
    Console.print(error.message);

    return dateCheck();
  }
};

const validate = async (input) => {
  Validator.checkDate(input);

  return;
};
