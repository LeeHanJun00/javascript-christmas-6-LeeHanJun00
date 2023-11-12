import Benefit from '../src/Benefit.js';

describe('증정이벤트 테스트', () => {
  test('총 주문금액이 12만원 이상일떄 25000원 샴페인 1개 증정', async () => {
    const totalPrice = 130000;
    const output = 25000;
    const benefit = new Benefit();
    expect(await benefit.checkGiftEvent(totalPrice)).toBe(output);
  });

  test('총 주문금액이 12만원 미만일때 증정 혜택 0원', async () => {
    const totalPrice = 119998;
    const output = 0;
    const benefit = new Benefit();
    expect(await benefit.checkGiftEvent(totalPrice)).toBe(output);
  });
});
