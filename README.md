# Chainstock
## ChainStock를 소개합니다!

ChainStock은 비상장주식 중 비통일주식의 복잡한 거래방식과 주식 소유자 위변조 문제를 해결하는 블록체인 기반 비상장주식 거래 플랫폼입니다. 

현재 투자자들의 많은 관심을 받고 있는 비상장주식은 거래 규모와 그 가치가 점점 더 커지고 있으나 비상장주식을 거래하는 데에는 많은 서류와 절차가 필요한 상황입니다. 또한 비상장주식의 소유자를 확인할 수 있는 방법이 시스템화 되어 있지 않아 양도자의 소유권 확인 역시 복잡하고 위변조 가능성이 있습니다. ChainStock은 블록체인을 통해 거래내역을 기록하고 소유권을 증명하여 이러한 불편함과 위험성을 없앴습니다.

## ChainStock의 기술 소개

ChainStock은 NEAR Protocol을 기반으로 운영되며 NFT 기술을 사용하고 Smart Contract를 통해 이를 구현합니다.

**Near Protocol**

NEAR Protocol은 레거시 블록체인의 문제점인 비싼 비용과 느린 처리 속도를 해결하기 위해 등장했으며, 최종 확인 처리 속도 1초와 저렴한 수수료가 특징인 블록체인이며 Sharding 기술을 도입하고 구현하는 최초의 블록체인입니다. Mass adoption을 위해 개발자 친화성, 사용성에 포커스를 맞춘 NEAR Protocol을 사용해 빠르고 저렴한 비용에 유저들이 비상장 주식 거래를 할 수 있도록 DApp을 빌딩하고 있습니다.

더 많은 NEAR Protocol에 대한 설명은 NEAR Protocol 홈페이지를 참고해주세요.

[NEAR Protocol | Reimagine your World](https://near.org)

**NFT 기술**

NFT는 ‘대체 불가능한 토큰’으로 희소성을 가진 디지털 자산 즉, 디지털 세계에서 등기부등본과 같은 개념입니다. 최초의 창작자가 누구인지, 어떤 사람들이 소유해왔는지를 고유한 암호로 저장하기 때문에 소유권의 위변조가 불가능한 것이 특징입니다. ‘원본’을 증명할 수 있는 기술로 주식의 소유자 증명과 거래시 위변조를 막을 수 있기 때문에 주요 기술로 사용하였습니다. 비통일주식 1주를 NFT 토큰으로 발행하는 데 사용됩니다.

**ERC721 기반 Smart Contract**

한 주 단위로 구성되어있는 주식의 특성과 맞게 비통일주식을 스마트 컨트랙트를 통해 ERC721 표준을 따른 NFT 토큰으로 발행하고 거래하는 형태로 구현합니다. 

스마트 컨트랙트 주요 기능은 

1. 비통일 주식을 NFT로 만들기 위해 발행하고 `approve` 과정을 거치기 

2. 비통일 주식을 토큰으로 구매하고 사용자 간 `transfer`를 구현하기 입니다.

## ChainStock의 기대효과

**간편한 비통일주식 발행으로 스타트업, 벤처 생태계 활성화 가능**

그동안 복잡한 비통일주식 거래 방식으로 인해 스타트업도 비통일주식을 발행하기 어려웠고 투자자 역시 구입하기 어려웠습니다. 하지만 NFT 기술을 이용한다면 발행과 구매, 거래가 모두 간편해지기 때문에 투자가 활성화될 수 있습니다.

**비통일주식 거래의 단순화, 간편화**

기존에 많은 서류들이 필요했던 것에 비해 플랫폼에 가입하고 계좌나 지갑을 연결하고 플랫폼 위에서 바로 거래하기만 하면 되므로 매우 간편합니다.

**주주명부 관리 간편화**

기업에서 직접 관리해야했던 주주명부 역시 토큰 소유권 확인을 통해 자동으로 관리되고 간편하고 빠르게 확인할 수 있습니다.

**비통일주식 관련 서류 위변조검사 기능**

기존에 많은 서류들이 위변조 되었는지 구매자와 기업 측에서 검사를 했어야 하는데 반면 NFT 기술을 사용한다면 트랜잭션만 확인하면 되므로 위변조검사 기능이 매우 간편해집니다.

**비통일주식 거래 장부화 및 투명화**

블록체인 기술의 장점을 이용해 21세기에 맞지 않는 거래 과정이 수기로 이루어지는 복잡하고 불투명했던 방식을 간편하고 투명하게 디지털화시켜 변화시킬 수 있습니다. 

## 개인 사용자를 위한 사용설명서

### 1. 회원가입 / 로그인

1-1. 아이디와 비밀번호를 설정하여 계정을 생성합니다.

![회원가입 - STEP 1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e649309c-b5fd-4df9-bb35-3736fd99a34c/회원가입_-_STEP_1.png)

1-2. 특정금융정보이용법에 따라 신원 확인을 진행해주세요. 

![회원가입 - STEP 2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89e7bdf9-dc8d-4ac2-aa7f-22d599434f4b/회원가입_-_STEP_2.png)

1-3. 회원가입이 완료되었다면 로그인해주세요.

![로그인.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94262085-07b3-40d5-9e4a-2d673dcda907/로그인.png)

### 2. 메인화면

- 회원가입 후 로그인을 완료하면 다음과 같은 메인화면을 만날 수 있습니다.
- 새로운 종목과 거래가 많은 인기 종목을 확인할 수 있습니다.
- 왼쪽의 메뉴바를 통해 'Market'과 'Mypage'로 이동할 수 있습니다.

![MainPage.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9e3abea-8db7-40d9-97fe-c42c4b6bea12/MainPage.png)

### 3. 종목 확인

- 왼쪽 메뉴바에서 'Market'을 누르면 다음과 같이 전체 기업 종목 확인을 할 수 있습니다.
- 기업명이나 키워드를 통해 기업을 검색할 수 있습니다.
- 기업의 이름, 기업 가치, 기업의 짧은 설명, 최근 거래 시점, 최저 가격을 확인할 수 있습니다.
- '보유중인 기업 확인하기' 버튼을 누르면 마이페이지로 이동하게 됩니다.
- 각 기업 박스를 누르면 각 기업의 상세 페이지로 이동하게 됩니다.

![Market.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22c0f9fa-e166-43dd-b314-7e16b93acb14/Market.png)

### 4. 기업 상세 페이지 / 종목 구매

- 3에서 기업 박스를 누르면 다음과 같은 화면을 볼 수 있습니다.
- 해당 기업 매물을 아래에서 확인할 수 있고, 종목명, 가격, 등록일, 등록 번호로 이루어져 있습니다.
- 낮은 가격순, 높은 가격순, 등록일 순으로 정렬이 가능합니다.
- 매물의 아무 부분이나 클릭하면 해당 매물을 구매할 수 있는 팝업이 생성됩니다.

![Detail.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc84bfaa-5b76-48f2-8fd7-c96f336d1ce5/Detail.png)

### 5. 마이페이지 / 종목 판매

- 왼쪽 메뉴바의 'MyPage'를 누르거나 종목 확인 페이지에서 '보유중인 기업 확인하기' 버튼을 누르면 본 화면으로 이동할 수 있습니다.
- 보유 중인 주식 목록을 확인할 수 있으며 거래 일자와 구매 가격, 구매 영수증을 확인할 수 있습니다.
- 보유 중인 주식 목록에서 판매 버튼을 누르면 판매할 수 있는 팝업이 생성됩니다.
- 판매 중인 주식 목록에서 현재 내가 판매하고 있는 주식의 펀매 등록 일자와, 구매 가격, 판매 가격을 확인할 수 있습니다.

![마이페이지.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc3a7337-f160-4cfc-85b3-b19dbb016e0d/마이페이지.png)

- '구매 영수증' 칸을 누르면 다음과 같이 NEAR transaction을 확인할 수 있는 페이지로 이동하게 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e13b25c-a656-45c5-a8bb-1e12f0a53675/Untitled.png)

## 기업 사용자를 위한 설명서

### 1. 회원가입 / 로그인

1-1. 회원가입 페이지에서 아래의 기업용 계정 만들기 버튼을 눌러 아이디와 비밀번호를 설정하여 계정을 생성해주세요.

![회원가입 - STEP 1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e649309c-b5fd-4df9-bb35-3736fd99a34c/회원가입_-_STEP_1.png)

1-2. 특정금융정보이용법에 따라 신원 확인을 진행해주세요. 

![회원가입 - STEP 2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89e7bdf9-dc8d-4ac2-aa7f-22d599434f4b/회원가입_-_STEP_2.png)

1-3. 회원가입이 완료되었다면 로그인해주세요.

![로그인.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/94262085-07b3-40d5-9e4a-2d673dcda907/로그인.png)

### 2. Home 화면

- 회원가입 후 로그인을 완료하면 다음과 같은 메인화면을 만날 수 있습니다.
- 새로운 종목과 거래가 많은 인기 종목을 확인할 수 있습니다.
- 왼쪽의 메뉴바를 통해 'Market'과 'Mypage'로 이동할 수 있습니다.

![MainPage.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6949d3e3-101e-4aa4-8be5-7b964e58b443/MainPage.png)

### 3. MyPage - 주주명부 확인

- 왼쪽 메뉴바의 'MyPage'를 누르면 기업 정보를 관리할 수 있는 본 페이지로 이동할 수 있습니다.
- 본 페이지에서 기업의 주식을 보유하고 있는 주주명부를 확인할 수 있습니다.
- 지분율 순, 구매일자 순, 주주명 순으로 정렬할 수 있습니다.
- '주주명부 출력하기' 버튼을 통해 아래의 주주명부를 출력하여 저장할 수 있습니다.
- '내 기업 상세페이지 바로가기' 버튼을 통해 기업의 마켓 상세 페이지로 이동할 수 있습니다.

![주주명부 관리 페이지.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed0a0ac1-6e2a-4f94-95e7-b6d286cedb3b/주주명부_관리_페이지.png)

- '거래 영수증' 칸을 누르면 다음과 같이 NEAR transaction을 확인할 수 있는 페이지로 이동하게 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e13b25c-a656-45c5-a8bb-1e12f0a53675/Untitled.png)

### 4. 기업 매물 확인

- 개인 사용자와 마찬가지로 Market에서 나의 기업을 클릭하면 다음과 같이 기업의 매물을 확인할 수 있고, MyPage에서의 '내 기업 상세페이지 바로가기' 버튼을 통해서도 이동할 수 있습니다.

![Detail.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/813d7dbb-bf54-4da7-b44d-0656b69b57ed/Detail.png)
