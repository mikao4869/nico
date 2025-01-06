# js 사용법

ex)


      const loginForm=document.querySelector(".login-form");
      const loginInput=loginForm.querySelector("input");
      const loginButton=loginForm.querySelector("button");

하나하나씩 `document.queryselector` 안하고 만약에 부모속성과 자식속성 관계라면 


    <div class="login-form">
        <input type="text" placeholder="what is your name?" />
        <button>Log in</button>
      </div>

이렇게 큰 `login-form` 안에 (부모속성)

`input`과 `button`이 있으면 (자식속성)


      const loginInput=loginForm.querySelector("input");
      const loginButton=loginForm.querySelector("button");

이런식으로 코드가 작성가능하다. 


`loginForm.querySelector` 이런식.



# 글자수의 길이를 어떻게 확인할수있을까?

### 정답 `length`을 이용해서