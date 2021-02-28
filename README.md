# R.I.P
![logo](https://user-images.githubusercontent.com/62928948/104840077-8f141300-5908-11eb-8e86-f41394226746.png)
- **Team_name** : R.I.P
- **Team_member** : 김규빈, 김영재 , 김원희 , 이현주
- **Project_development \_period** : 2020년 12월 28일 ~ 2021년 1월 8일
- **Backend_github** : [R.I.P BackEnd](https://github.com/wecode-bootcamp-korea/15-2nd-R.I.P.-backend)

## Project_info

세상 모든 액티비티, 프립 주말엔 서핑, 퇴근 후엔 베이킹

색다른 여가생활을 원한다면 Let's Frip!

## Main_skills

- 캐로셀 슬라이드
- 동적 라우팅을 이용한 페이지 이동 기능
- 로그인/회원가입 기능(소셜 로그인, 문자 인증)
- 게시판 필터링 기능
- 게시판 기능( 리뷰 형식의 사진, 텍스트 리뷰)
- 문의하기 게시판( 비밀글 기능)

## Tech_stack / Tool

> **Front-end**

- React
- React-router-dom
- Javascript
- HTML, styled-Components
- CRA, npm
- Git & Github
- ESLint , Prettier
- trello

<img width="1627" alt="스크린샷 2021-01-08 오후 6 53 29" src="https://user-images.githubusercontent.com/62928948/104840124-ce426400-5908-11eb-9ed6-04c8e7bb11d6.png">
<img width="1432" alt="스크린샷 2021-01-08 오후 6 53 43" src="https://user-images.githubusercontent.com/62928948/104840143-ec0fc900-5908-11eb-9a62-018b1fdf02d9.png">

---

> **Back-end**

- Python
- Django
- MySQL
- AWS
- JWT
- Bcrypt
- Faker & Google Trans
- Gunicorn
- Nginx
- Git & Github
- trello
- Aquerytool

# Video

_-_ **MainPage onClick**

[<img width="1260" alt="스크린샷 2021-01-10 오후 4 30 58" src="https://user-images.githubusercontent.com/62928948/104841125-a43d7180-5909-11eb-8168-f8ebd30bdafc.png">
](https://www.youtube.com/watch?v=n6bdeVMLE1g)

## Member Info

1. 김규빈 :

- Role : Team Member
- Position : Front-end
- Stack : React / Styled-Component / Router
- Works : 메인 페이지 / 상품 디테일 페이지 / 상품 문의하기 게시판 / 상품 결제 프로세스 / footer
- 프로젝트 후기 블로그 : [후기](https://velog.io/@9bin08/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-R.I.P-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

[메인 페이지]

- 메인 페이지 레이아웃
- 메인 페이지 이벤트 배너 캐로셀 슬라이더(라이브러리 없이, Styled-component로 구현)
- 메인 페이지 상품 쿼리스트링 이용하여 정렬(인기순 , 가격 낮은순)
- 메인 페이지 상품 API 통신

[상품 디테일 페이지]

- 상품 디테일 페이지 레이아웃
- 상품 디테일 페이지 Api 통신
- 카카오맵 api를 이용하여 지도에 마커 표시(String으로 주소 받아오면 위도,경도 변환하여 마커)

[상품 문의하기 페이지]

- 문의하기 페이지 api 통신
- 문의하기 페이지 레이아웃
- 문의하기 글쓰기 기능
- 문의하기 글쓰기 비밀글 기능 추가
- 문의에 호스트는 답글을 달아 줄 수 있음

[상품 후기 페이지]

- 후기 페이지 api 통신
- 후기 페이지 레이아웃
- 후기 형식은 내용과 사진으로 게시물 형태로 작성
- 사진은 formdata 형식으로 전송
- 사진 선택시 미리보기 기능
- 모든 데이터는 앱과 공유가능(웹에서 후기 등록시 어플 후기 페이지 최상단에 표시)
- 작성한 후기는 피드페이지로 연동하여 최상단에 표시

[상품 결제하기 페이지]

- 상품 옵션 선택 페이지 레이아웃
- 상품의 옵션값은 api 통신으로 이루어짐
- 상품 옵션 선택 validation
- 상품 옵션 선택시 결제하기 페이지로 넘어가 이용자에게 최종 컨펌을 받음
- 결제하기 페이지는 상품 이름 , 상품 정보, 선택한 옵션, 가격 등이 표시되고 체크박스로 컨펌

---

2. 김영재

- Role : Team Member
- Position : Front-end
- Stack : React / Styled-Component / Router

[로그인 / 회원가입 페이지]

- 로그인 / 회원가입 페이지 레이아웃
- 문자인증 회원가입 기능 구현
- 카카오 소셜 회원가입 및 로그인 기능구현
- 백엔드 통신을 통해 전송 받은 토큰값 로컬스토리지 저장 기능 구현

[네비게이션 바]

- 네비게이션 바 레이아웃 
- 토큰 유무성에 따라 상단 네비게이션 구성 변화

[커뮤니티 페이지]

- Grid를 활용한 커뮤니티 페이지 레이아웃
- 버튼 애니메이션 효과

[피드 페이지]

- Grid를 활용한 피드 페이지 레이아웃
- 원하는 양의 Feed Card만 받아오고 더보기 버튼 클릭시 모든 데이터 출력 기능 구현
- 좋아요 버튼 클릭시 숫자 카운트 및 색 변화
- 피드 페이지 구성 API 통신을 통해 이루어짐
- 댓글 버튼 클릭시 댓글 달기 페이지로 이동 및 댓글 작성,추가 및 삭제 기능 구현

[액티비티 페이지]

- Grid를 활용한 레이아웃
- 액티비티 페이지 구성 API 통신을 통해 이루어짐
- Pagenation 기능 구현으로 한번에 데이터 출력이 아닌 한페이지에서 20개의 데이터만 출력
- 모달창 구현
- 모달창에서 쿼리스트링을 활용해 원하는 데이터 필터링 기능 


---
