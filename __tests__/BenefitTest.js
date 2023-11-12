import Validator from '../src/utils/Validator.js';
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

  test('주말 혜택시 주문한 메인메뉴 개수세는 기능', async () => {
    const input = { 티본스테이크: 1, 바비큐립: 1, 제로콜라: 2 };
    const output = 2;
    const result = Validator.countMain(input);
    expect(result).toBe(output);
  });

  test('평일 혜택: 디저트메뉴 1개당 2,023원 할인', async () => {
    const visitDate = 4;
    const menuLsit = { 초코케이크: 1, 아이스크림: 2, 제로콜라: 2 };
    const output = 6069;
    const benefit = new Benefit();
    expect(await benefit.checkWeekdayDiscount(visitDate, menuLsit)).toBe(output);
  });

  test('주말 혜택: 메인메뉴 1개당 2,023원 할인', async () => {
    const visitDate = 15;
    const menuLsit = { 해산물파스타: 1, 바비큐립: 1, 제로콜라: 2 };
    const output = 4046;
    const benefit = new Benefit();
    expect(await benefit.checkWeekendDiscount(visitDate, menuLsit)).toBe(output);
  });
});

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
