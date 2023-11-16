import Benefit from '../src/Benefit.js';

describe('특별할인 혜택 테스트', () => {
  const visitDate = [[3], [10], [17], [24], [25], [31]];
  test.each(visitDate)('달력에 별이있는 날짜 선택시 1000원 할인', (ipnut) => {
    const output = 1000;
    const benefit = new Benefit();
    expect(benefit.checkSpecialDate(ipnut)).toBe(output);
  });

  test('달력에 별이없는 날짜 선택시 할인혜택 0원', () => {
    const visitDate = 15;
    const output = 0;
    const benefit = new Benefit();
    expect(benefit.checkSpecialDate(visitDate)).toBe(output);
  });
});
