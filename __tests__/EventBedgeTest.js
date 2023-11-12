import Validator from '../src/utils/Validator.js';

describe('이벤트 배지 부여 테스트', () => {
  test('총 혜택금액 5천원 미만일때 없음', async () => {
    const input = 4999;
    const output = '없음';
    const result = Validator.eventBedge(input);
    expect(result).toBe(output);
  });

  test('총 혜택금액 5천원 이상일때 별', async () => {
    const input = 5000;
    const output = '별';
    const result = Validator.eventBedge(input);
    expect(result).toBe(output);
  });

  test('총 혜택금액 1만원 이상일때 트리', async () => {
    const input = 10000;
    const output = '트리';
    const result = Validator.eventBedge(input);
    expect(result).toBe(output);
  });

  test('총 혜택금액 2만원 이상일때 산타', async () => {
    const input = 20000;
    const output = '산타';
    const result = Validator.eventBedge(input);
    expect(result).toBe(output);
  });
});
