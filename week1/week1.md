#1주차 내용 정리

#Typescript 장점
- 정정성 보장
- 개발 생산성 향상
- 협업에 유리
- 점진적 적용 가능

#반환값에 타입 붙이기
- Const 변수: 변수의 예상되는 반환값:'변수';
ex)const isSymbol: symbol =Symbol('symbol'); <symbol은 항상 고유한 값이다.

#함수 타입
- 매개변수:function add(a: number, b: number): number {
  return a + b;
}와 같이 매개변수 이름 뒤에 :타입 형식으로 작성

- 반환: function greet(name: string): string {
  return `안녕하세요, ${name}입니다`;
}와 같이 매개변수 목록 뒤에 : 타입을 붙임

#리터럴 타입:
- 특정값만 허용 
- ex) let num: 1=1;
num=20; <오류발생

#배열vs 튜플
- 배열: 같은 타입 여러 값 저장
ex)let numbers: number[] = [1, 2, 3];
numbers.push(4);
numbers[0] = 10;
- 튜플: 타입과 길이가 고정됨
ex)let person: [string, number] = ["Alice", 25];
person[0] = "Bob";   //  가능
person[1] = 30;      //  가능
person[2] = 40;      // 오류
person[0] = 100;     //  오류

#유니언 타입
- |기호를 사용해 두 개 이상의 타입을 결합
ex) let value: string | number;

#타입 별칭
- 특정 타입이나 인터페이스를 참조할 수 있음
ex)// 타입 별칭 사용
type Matthew = 'Matthew';
const yongminEnglishName: Matthew = 'Matthew';

#Generic
- 다양한 타입 재사용 가능
- function identity<T>(arg: T): T {
  return arg;
}

let num = identity<number>(42);      // number 타입
let str = identity<string>("Hello"); // string 타입

#enum
- 이름이 있는 상수 집합 정의
- 숫자형 enum 
ex) enum NumEnum {
  A,    // 0
  B,    // 1
  C     // 2
}

console.log(NumEnum.A); // 0
console.log(NumEnum.B); // 1

- 문자형 enum
ex)enum StrEnum {
  A = "APPLE",
  B = "BANANA",
  C = "CHERRY"
}

console.log(StrEnum.A); // "APPLE"
console.log(StrEnum.B); // "BANANA"

