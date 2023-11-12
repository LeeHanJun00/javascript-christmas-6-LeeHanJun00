export const MESSAGE = Object.freeze({
  enterVisitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  enterMenu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const ERROR = Object.freeze({
  inputMenu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  ipnutDate: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
});

export const APPETIZER = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,
});

export const MAIN = Object.freeze({
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
});

export const DESSERT = Object.freeze({
  초코케이크: 15000,
  아이스크림: 5000,
});

export const DRINK = Object.freeze({
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

export const MENU = Object.freeze({
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
  초코케이크: 15000,
  아이스크림: 5000,
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
});

export const SPECIAL_DATE = [3, 10, 17, 24, 25, 31];

export const AMOUNT = Object.freeze({
  minimumAmountOfGiftEvent: 120000,
  discountOnWeekendAndWeekday: 2023,
  christmasDiscountStart: 1000,
  christmasDiscountIncrease: 100,
  specialDateDiscount: 1000,
});
