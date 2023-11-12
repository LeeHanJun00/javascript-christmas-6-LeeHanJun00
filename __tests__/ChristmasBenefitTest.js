import Benefit from '../src/Benefit.js';

describe('크리스마스 디데이 할인 혜택 테스트', () => {
  test('25 ~ 31 사이 날짜 입력했을 때 크리스마스 디데이 할인 0원', async () => {
    const input = 27;
    const output = 0;
    const benefit = new Benefit();
    expect(await benefit.checkChristmasDiscount(input)).toBe(output);
  });

  test('1 입력시 크리스마스 디데이 할인 1000원', async () => {
    const input = 1;
    const output = 1000;
    const benefit = new Benefit();
    expect(await benefit.checkChristmasDiscount(input)).toBe(output);
  });

  test('1일 기준으로 하루마다 할인 혜택 100원증가', async () => {
    const input = 10;
    const output = 1900;
    const benefit = new Benefit();
    expect(await benefit.checkChristmasDiscount(input)).toBe(output);
  });

  test('1일 기준으로 하루마다 할인 혜택 100원증가', async () => {
    const input = 10;
    const output = 1900;
    const benefit = new Benefit();
    expect(await benefit.checkChristmasDiscount(input)).toBe(output);
  });
});
