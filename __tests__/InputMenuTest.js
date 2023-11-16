import Menu from '../src/Menu.js';
import Validator from '../src/utils/Validator.js';

describe('매뉴 입력 기능', () => {
  test('올바른 메뉴를 입력했을 때 객체로 변환', async () => {
    const input = ['티본스테이크-1', '타파스-1', '제로콜라-2'];
    const output = { 티본스테이크: 1, 타파스: 1, 제로콜라: 2 };
    const menu = new Menu();
    expect(await menu.splitUserInputMenu(input)).toMatchObject(output);
  });

  test('같은 메뉴를 입력했을 때 에러 출력', () => {
    const input = ['아이스크림-2', '타파스-3', '제로콜라 - 2', '아이스크림-1'];
    expect(() => Validator.checkSameMenuName(input)).toThrowError('[ERROR]');
  });

  test('음료만 주문했을 때 에러 출력', () => {
    const input = { 샴페인: 1, 제로콜라: 2 };
    expect(() => Validator.checkOnlyOrderDrink(input)).toThrowError('[ERROR]');
  });

  test('각 메뉴를 한번에 20개 초과 주문시 에러 출력', () => {
    const input = { 티본스테이크: 21, 샴페인: 1, 제로콜라: 2 };
    expect(() => Validator.checkMaxOrder(input)).toThrowError('[ERROR]');
  });

  test('숫자가아닌 잘못된 메뉴개수 입력시 에러 출력', () => {
    const input = { 티본스테이크: 'one', 샴페인: 1, 제로콜라: 2 };
    expect(() => Validator.checkNumberOfMenus(input)).toThrowError('[ERROR]');
  });
});
