import Validator from '../src/utils/Validator.js';

describe('날짜 입력 기능', () => {
  test('31이상의 숫자를 입력했을때', () => {
    const date = 32;
    expect(() => Validator.checkDate(date)).toThrowError('[ERROR]');
  });

  test('문자를 입력했을때', () => {
    const date = '12aaa';
    expect(() => Validator.checkDate(date)).toThrowError('[ERROR]');
  });

  test('정수가 아닌 수를 입력했을때', () => {
    const date = 1.3;
    expect(() => Validator.checkDate(date)).toThrowError('[ERROR]');
  });

  test('1이하의 숫자를 입력했을때', () => {
    const date = 0;
    expect(() => Validator.checkDate(date)).toThrowError('[ERROR]');
  });
});
