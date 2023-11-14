import Validator from '../src/utils/Validator.js';
import Benefit from '../src/Benefit.js';

describe('평일,주말 혜택 테스트', () => {
  test('일요일 ~ 목요일은 평일로 판단', () => {
    const input = 4;
    const output = 'weekday';
    const result = Validator.checkWeekendOrWeekday(input);
    expect(result).toBe(output);
  });

  test('금요일 토요일은 주말로 판단', () => {
    const input = 15;
    const output = 'weekend';
    const result = Validator.checkWeekendOrWeekday(input);
    expect(result).toBe(output);
  });

  test('평일 혜택시 주문한 디저트메뉴 개수세는 기능', () => {
    const input = { 티본스테이크: 1, 초코케이크: 2, 아이스크림: 2, 제로콜라: 2 };
    const output = 4;
    const result = Validator.countDessert(input);
    expect(result).toBe(output);
  });

  test('주말 혜택시 주문한 메인메뉴 개수세는 기능', () => {
    const input = { 티본스테이크: 1, 바비큐립: 1, 제로콜라: 2 };
    const output = 2;
    const result = Validator.countMain(input);
    expect(result).toBe(output);
  });

  test('평일 혜택: 디저트메뉴 1개당 2,023원 할인', () => {
    const visitDate = 4;
    const menuLsit = { 초코케이크: 1, 아이스크림: 2, 제로콜라: 2 };
    const output = 6069;
    const benefit = new Benefit();
    expect(benefit.checkWeekdayDiscount(visitDate, menuLsit)).toBe(output);
  });

  test('주말 혜택: 메인메뉴 1개당 2,023원 할인', () => {
    const visitDate = 15;
    const menuLsit = { 해산물파스타: 1, 바비큐립: 1, 제로콜라: 2 };
    const output = 4046;
    const benefit = new Benefit();
    expect(benefit.checkWeekendDiscount(visitDate, menuLsit)).toBe(output);
  });
});
