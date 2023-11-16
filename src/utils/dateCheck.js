import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Validator from './Validator.js';

export const dateCheck = async () => {
  try {
    const visitDate = await InputView.inputDate();
    validate(visitDate);

    return visitDate;
  } catch (error) {
    Console.print(error.message);

    return dateCheck();
  }
};

const validate = (input) => {
  Validator.checkDate(input);

  return;
};
