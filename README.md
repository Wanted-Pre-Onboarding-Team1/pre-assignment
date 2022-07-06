
# [Wanted Pre Onboarding FE 5th] 팀 과제 # 1-1
- 주제: 인스타그램 클론코딩 및 리팩토링
- 프로젝트 기간: 2022.07.04 ~ 2022.07.06
## 1. 팀원 소개 맡은 부분
### 김유범
```
- 가독성 중점으로 코드 리팩토링 진행
```
### 이지호
```
 - 코드 리뷰 및 리펙토링 진행
 - 오타 및 불필요한 코드 수정
 - 기타 에러처리 버그 수정 
 - IntersectionObserver 를 활용한 Lazyloading 고도화
```
### 이치행
```
 - 코드 리뷰 및 리팩토링 진행
 - 불필요 코드 삭제
 - 작성 스타일 통일 등
```
 ### 임종혁
```
 - 코드리뷰 및 코드분석
 - 스타일링 변수화 컬러를 변수화 하여 테마변경시 컬러변경 가능하게 리팩토링
``` 
### 천현주
```
- 로그인 form 제출 시 커넥션 경고 해결 
- src/assets 추가
```
## 2. 프로젝트 소개
### 2022.07.04
    - 사전 과제로 제출한 코드의 리뷰 진행: 각 팀원의 Repo에서 수정 사항을 만든 뒤 Pull Request 요청을 만들어 진행
    - 코드 리뷰 내용을 바탕으로 각자 리팩토링 진행
### 2022.07.05
    - 제출용 코드를 선정하기 위해 GitHub Organization 생성
    - 선정된 코드의 리팩토링 진행
    - Pull Request 요청을 통해 리팩토링 내용의 리뷰 진행 및 Merge
    - Merge 결과 발생한 오류 수정
### 2022.07.06
    - 추가적으로 수정이 필요한 부분 검토 및 제출
## 3. 프로젝트 구조

```
📦public
 ┣ 📂data
 ┃ ┣ 📜feed.json
 ┃ ┗ 📜user.json
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜logo192.png
 ┣ 📜logo512.png
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┗ 📜instagram.png
 ┣ 📂component
 ┃ ┣ 📂base
 ┃ ┃ ┗ 📜GNBHeader.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Image.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗ 📜UserIcon.jsx
 ┃ ┣ 📂feed
 ┃ ┃ ┣ 📜FeedCommentSection.jsx
 ┃ ┃ ┗ 📜FeedSection.jsx
 ┃ ┗ 📂login
 ┃ ┃ ┣ 📜LoginFormBox.jsx
 ┃ ┃ ┣ 📜RegisterBox.jsx
 ┃ ┃ ┗ 📜SubLoginBox.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useCommentForm.js
 ┃ ┣ 📜useFeedLoad.js
 ┃ ┣ 📜useLazyCheck.js
 ┃ ┣ 📜useLogin.js
 ┃ ┣ 📜useObserverFeed.js
 ┃ ┗ 📜useValidation.js
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜getDataAPI.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜userStorage.js
 ┃ ┗ 📜constans.jsx
 ┣ 📂pages
 ┃ ┣ 📜FeedPage.jsx
 ┃ ┣ 📜LoginPage.jsx
 ┃ ┗ 📜PreAssignmentGuide.jsx
 ┣ 📂router
 ┃ ┗ 📜route.js
 ┣ 📂styles
 ┃ ┣ 📜commonComponents.js
 ┃ ┣ 📜constans.js
 ┃ ┣ 📜globalStyles.js
 ┃ ┗ 📜media.js
 ┣ 📜App.js
 ┗ 📜index.js
 ```
 
## 4. 컨벤션
### 협업을 위한 git 커밋컨벤션 설정
| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| feat     | 새로운 기능을 추가할 경우                     |
| fix      | 버그를 고친 경우                                        |
| design    | CSS 등 사용자 UI 디자인 변경                              |
| docs     | 문서 생성, 추가, 수정(README.md)                 |
| refactor | 코드 리팩토링                                |
| chore   | 간단한 코드 변경, 로직에 큰 영향을 주지 않을 작은 변경이 있을 경우 |
| refactor | 코드 리팩토링                                |
| test | 테스트 코드 추가 및 테스트 코드 리팩토링                     |
| rename |파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
| !HOTFIX |급하게 치명적인 버그를 고쳐야하는 경우|

## 5. 진행내용

### 프로젝트 클론
```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/pre-assignment.git
```
### 패키지 설치
```
$ npm install 
```
### develop 서버 실행
```
$ npm start
```
### branch에서 작업
```
$ git checkout -b feature/member-name
```
