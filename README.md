![header](https://capsule-render.vercel.app/api?type=waving&color=FF6161&section=header&height=250&text=React%20입문!&fontColor=FFFFFF&fontAlignY=40)

### 🥇파리 올림픽 메달 트래커 만들기
<br/>

#### 과제 진행 순서
- vite 사용하여 React 프로젝트 생성
- 예시페이지 참고하여 컴포넌트 계층 나누기
- App.jsx 파일 내에서 InputBox, MedalBox 컴포넌트 분리하기
- 임의 데이터 채워서 form, table 구조 짜고 css 수정하기
- 동적으로 변하는 데이터가 무엇인지 파악하고 useState로 상태관리하기
- InputBox, MedalBox로 state 전달하기(props)
- 국가 추가, 업데이트, 삭제 로직 구현하기
- InputBox, MedalBox 컴포넌트와 CSS 파일 분리하기
- 국가 추가, 업데이트, 삭제 함수 커스텀 훅으로 분리하기
  <br/>
  <br/>
#### App.jsx
- state, 커스텀 훅 불러오는 위치
- 변경된 상태를 newMedal이라는 객체로 생성함
- 큰 제목과 함께 InputBox, MedalBox 컴포넌트를 렌더링함
  <br/>
#### InputBox.jsx
- App.jsx에서 전달받은 state를 props로 받아 각 인풋 필드에 onChange 이벤트와 setState 함수를 연결
- 각 인풋창과 추가, 업데이트 버튼을 포함하는 폼을 리턴함
  <br/>
#### Medal.jsx
- App.jsx에서 전달받은 medals 상태를 받아옴
- 실제로 데이터를 출력해주는 위치
- 데이터가 없으면 안내문구를, 있으면 테이블을 리턴함
  <br/> 
#### useMedalActions.jsx
- 메달의 추가, 수정, 삭제를 관리하는 커스텀 훅
- medals라는 새로운 상태를 만들어 App.jsx에서 전달받은 newMedal 객체를 추가, 수정, 삭제함

<br/>

#### 과제를 마치며...
챌린지반에서 함께 보았던 리액트로 사고하기 문서가 큰 도움이 되었다. [여기서 볼 수 있음](https://ko.react.dev/learn/thinking-in-react)<BR/>
과제를 시작하기 전에 리액트 구조를 이해하는 게 우선이라고 생각해서 리액트 문서에 있는 코드를 한 줄씩 읽어보고 어떻게 연결되었는지, 어떻게 구동하는 건지... AI한테 코드 한 줄씩 분석시켜서도 읽어봤다. <BR/>
기능을 구현하는 것까지는 나름대로 순조로웠는데 마지막에 컴포넌트를 파일로 따로 빼고 add, update 등 함수를 커스텀 훅으로 빼는 게 가장 어려웠다. 사실 아직도 완전히 이해하고 있는 건 아니라, 다른 사람들의 코드도 내 코드도 열심히 뜯어보며 익숙해지는 연습을 해야 할 것 같다.
