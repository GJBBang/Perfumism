# 🍊 Perfumism 퍼퓨미즘

### 👩‍👩‍👧‍👧 팀원 소개

**권연주 (Backend, Data)**

**박예정 (Frontend, Data)**

**방기진 (Frontend, Data)**

**우동진 (Frontend)**

**우상준 (Backend, Deployment)**

**이승기 (Backend)**

### 📝 프로젝트 개요

**Perfumism:** 37,000개 데이터 기반 향수 추천 서비스

- **진행 기간:** 2022.02.21 ~ 2022.04.08

- 🖼 **기획 배경**

  - 향수 시장 규모 해가 갈수록 증가

    https://biz.chosun.com/distribution/fashion-beauty/2021/05/11/YAJSM7CZPNGHXDRWQKQPZRMAZI/

  - 코로나 장기화로 마스크가 필수품이 되면서 색조화장이 감소한 틈을 타 향수가 개성을 표현하는 도구로 부각

    https://www.sentv.co.kr/news/view/603139

  - 코로나로 인한 보복 소비 심리로 고가 프리미엄 향수인 니치향수에 대한 수요 증가(희소한 향기를 통해 개성을 나타내려는 의도, 희소성이 있는 향에 대한 수요가 증가하는 추세)

    https://www.siminilbo.co.kr/news/newsview.php?ncode=1065594300799615

  - 여러 브랜드의 향수 정보를 한눈에 볼수 있는 국내 서비스 부재

  - 코로나로 인한 외출이나 시향 어려움으로 추천을 받을 수 있는 서비스 필요성 증가

- ⚔ **기획 의도**

  - 향수에 대해 잘 모르는 사람들을 위해 정보 제공 및 추천
  - 자신만의 브랜드를 찾으려는 소비자들을 위한 향수 추천 기능 제공
  - 한 곳에서 여러 브랜드의 향수 추천 및 정보 제공

- 🎯 **주요 타겟층**

  - 시향에 어려움을 겪는 소비자(코로나)
  - 판매처에 접근이 어려운 소비자(백화점이 먼)
  - 어떤 향수를 시향 해야 할지 모르겠는 소비자
  - 내 취향을 한눈에 분석해보고 싶은 소비자

- 🖖 **핵심 키워드 3가지**

  - **향수 추천 페이지**
    - 설문조사 기반 향수 추천
    - 좋아요 기반 향수 추천
  - **향수 페이지**
    - 37,000개의 향수 정보
    - 필터링 기능
    - 사용자의 리뷰 및 평점 기능
    - 선택한 향수와 유사한 향수 추천
  - **커뮤니티**
    - 말머리를 통한 게시글 분류
    - 다른 사용자와의 커뮤니케이션 공간

- 🎬 **프로젝트 UCC**

### 🎉 프로젝트 소개

**Perfumism**은 37,000개 데이터를 기반으로 <u>향수를 추천</u>해주는 서비스 입니다.

여러분은 니치향수가 무엇인지 잘 알고 계신가요? 니치향수는 천연 원료나 흔하지 않은 성분을 사용해 희소성이 높은 향수를 의미합니다. 이 니치향수가 최근 소비자들에게 자신만의 개성을 표현하는 도구로 많은 인기를 끌고 있습니다. 특히 트렌드에 민감하고 욜로와 소확행을 추구하는 MZ세대들에게 주요한 소비 트렌드로서 자리 잡았습니다.

또한 코로나 팬데믹으로 인해 마스크 착용이 일상화되면서 색조 메이크업보다는 향수로 자신의 개성을 표현하려는 수요가 더욱 더 늘고 있습니다. 니치향수가 일종의 스몰 럭셔리 아이템으로 주목을 받으면서 많은 화장품 기업들도 발빠르게 니치향수 시장에 뛰어들고 있습니다.

이러한 소비 흐름으로 국내 프리미엄 향수 시장의 규모는, 가파른 성장세를 보이며 전문가들도 앞으로는 향수 시장이 계속 성장할 것으로 전망하고 있습니다.

하지만 향수에 대한 높은 수요에도 불구하고, 많은 향수 쇼핑몰에서는 취향에 맞는 향수 추천이나, 통합적인 향수 정보를 제공하고 있지 않았습니다.

따라서 저희 팀은 다양한 브랜드의 객관적인 향수 정보를 통합적으로 제공하고, 나아가 사용자의 취향에 알맞는 향수까지 추천해줄 수 있는 웹 서비스, **Perfumism**을 개발했습니다.

당신의 가치를 더욱 빛내줄 향수를 찾아보세요.

#### PERFUMISM

### ⛏ 주요 기능

[ERD](https://user-images.githubusercontent.com/97500667/173713460-386fda21-6c32-42e1-a317-329303a0e59f.png)

[Skills](https://user-images.githubusercontent.com/97500667/173713463-16d540cf-3457-455e-a7b1-0780c812d4f8.png)

[Architecture](https://user-images.githubusercontent.com/97500667/173713380-510ce1f7-5882-46a2-8ffd-da82151d4866.png)

#### 향수 추천![recommend](https://user-images.githubusercontent.com/97500667/173715898-6c2e871a-b36c-47f9-b620-323f5745da12.png)

- 5가지의 간단한 설문을 실시하고 향수 추천 결과를 받아볼 수 있습니다.
- 로그인한 유저라면 자신이 좋아요한 향수를 기반으로 추천 결과를 받아볼 수 있습니다.
- 추천 결과 페이지에서 사용자는 좋아하는 향기를 워드 클라우드로 쉽게 확인할 수 있습니다.
- [추천은 어떻게 이루어 지는가 ??](#✨-recommend-system)

#### 향수 조회 및 검색

- 37,000개 향수 목록을 무한스크롤을 통해 조회할 수 있습니다.
- 향기, 브랜드, 향수명을 검색할 수 있습니다.
- 향수 이미지 hover시 생기는 하트를 통해 좋아요를 누를 수 있습니다.
- 상세페이지를 통해 해당 향수의 정보를 확인할 수 있습니다.
- 상세페이지에서 해당 향수와 유사한 향수를 추천 받을 수 있습니다.
- 상세페이지에서 댓글과 대댓글을 작성할 수 있습니다.

#### 커뮤니티

![community](https://user-images.githubusercontent.com/97500667/173716804-60a2c7c3-0773-492f-aa43-fe6af9ac81bd.png)

- 로그인한 사용자만 커뮤니티를 이용할 수 있습니다.
- 말머리를 통해 게시글을 분류하고 있고 말머리 필터링 기능을 제공하고 있습니다.
- 게시글에는 댓글과 대댓글을 작성할 수 있습니다.

#### ✨ Recommend System

### 🙃 Perfumism 프로젝트 회고

#### 협업 룰

- **Jira**

  - 에픽은 각자 맡은 기능으로 구분하여 사용
  - 스프린트 시작 전까지 금주 에픽 및 스토리 등록
  - 스프린트 기간(월~금) 설정 후 시작
    - 월요일 10시
    - 백로그 → 스프린트로 스토리 옮기기
  - 스토리 포인트는 1시간에 1포인트
  - Description에 as-is 와 to-be 작성

- **Git**

  - **Branch타입/issue-"JIRA 번호"**

    - 브랜치 타입
      - feature
      - bugfix
    - 작성 예시
      - feature/issue-01

  - **Commit Type**

    - feat : 새로운 기능 추가
    - fix : 버그 수정
    - docs : 문서 수정
    - style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    - refactor : 코드 리펙토링
    - test : 테스트 코드, 리펙토링 테스트 코드 추가
    - chore : 빌드 업무 수정, 패키지 매니저 수정
    - 작성 예시
      - git commit -m “[S06P22D105-"JIRA 번호"] feat: commit msg”

  - **Rebase**

    - ```
      git remote add (최신 업데이트 저장소 네임) (최신 업데이트 저장소 url)
      git fetch upstream (동기화할 로컬 브랜치)
      git rebase upstream/(동기화할 로컬 브랜치)
      ```

  - **Gitlab Merge Request**

    제목 : [S06P22D105-JIRA 번호] 추가한 기능

    내용 :

    작업내용

    - 이런거 했습니다!!
