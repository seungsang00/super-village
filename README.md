# super-village
First team project by unionX

그냥 갑자기 생각나서 하는 미니 프로젝트 생각보다 스펙이 높아서 약간 걱정임
<details>
  <summary> HOW TO Start 🚀 </summary>
  
  1. **Clone this repository (organization repo name is origin)**
  먼저 해당 레포지토리 주소를 클론해서 내 로컬에 놓는다.
  ```sh
  $ git clone https://github.com/codeUnionX/super-village.git
  ```

  2. **fork tihs repository**
  clone했던 현재 레포지토리를 포크해서 내 github에 추가한다.  
  우측 상단에 포크하기 (이미지 추가 예정)  

  3. **remote add my remote repository**
  포크로 가져간 레포를 remote에 추가한다.
  예) 예시에서는 이름을 `my-repo`로 설정
  ```sh
  $ git remote add my-repo https://github.com/[나의 깃 아이디]/super-village.git
  ```
  -----
  > 여기서 부터는 매 작업시마다 하기
  4. **pull organize repo & push my remote repo**  
  공용 레포지토리에서 pull을 받고 다시 내 remote repo에 추가한다.
  ```sh
  $ git pull origin main
  $ git push my-repo main
  ```
  5. **working....**  
  이제 내가 작업하고 싶은걸 한다. (만들걸 붙여넣거나, 기존에 작업하던 코드를 마저 작업한다.)  

  6. **push my remote repo at dev branch (not main branch)**  
  `main`이 아닌 다른 브렌치에서 작업한 내용을 내 remote repo에 push 한다.

  7. **Pull request를 한다.**   
  dev나 기존 나의 브랜치에 PR을 요청한다.

  8. **PR(Pull Request)이 성공하면 머지한다.**
  먼저,
  `$ git pull origin main` => 
  `git checkout main` => 
  `git merge '작업한 브랜치'`

  ## commit message
  - `init`: 새기능 추가
  - `update`: 기능 업데이트
  - `bugfix`: 오류 수정
  - `deploy`: 배포

  ... 이런식으로 **맘에드는 header**가 있으면 추가 해주세요!

  > 예) 내가 새로운 기능을 만들었다.
  ```sh
  $ git commit -m "[init] superUser component initialize"
  ```
</details>




