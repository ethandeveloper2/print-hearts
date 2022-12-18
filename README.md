# print-hearts

## 과제명

printHearts 메서드 구현하기

## 개발 언어 및 환경

javascript , node.js

## 실행 방법

```jsx
node index.js
```

## 개발 시 고려 사항

printHeart 메서드 대한 성능 테스트 ( count 100 기준 실행 완료 시간 )

1. 처음 작성했던 코드 (396ms)
2. 추가 변수 선언 (스코프 체인 고려) (countHearts) (326ms)
3. 이중 for문 제거, repeat() 메서드 사용 (35ms)
4. string 형태로 result값을 return하여 출력 (20ms)

## 결과물

![10개 출력](https://user-images.githubusercontent.com/102854465/208281029-a055e466-9e66-4304-820d-aae27934f4f2.png)

![image](https://user-images.githubusercontent.com/102854465/208281266-9dfc4ddd-5af4-4377-af2e-a8b7c145e892.png)
