# 이벤트 사용법

예시를 보면서 간단하게 설명한다.


          const title=document.querySelector("div.hello:firest-child h1")

          function handleTitleClick(){
           console.log("title was Clicked!"); 
          }

          title.addEventListener("click",handleTitleClick);

# 사용법

### 1. 정의한다.

ex)

    이름.addEventListner("이벤트 종류",이벤트 이름)

### 2. 함수를 만든다.

ex)

      function 이름 (){
        *실행시킬 무언가*  
      }


### 3. 사용한다.

# 간결하게 사용하기

    title.addEventListner("click",handleTitleClick);


이것이

    title.onClick=handleTitleClick;

이랑 같다.


이처럼 긴 코드를 

`이름.on event 이름= 함수` 이렇게 좀 더 간결하게 사용가능하다. 


# event 종류



## resize

화면을 조절할때 생기는 이벤트 

ex)


    function handleWindowResize(){
      document.body.style.backgroundColor="tomato";
     }

        window.addEventListener("resize"handleWindowResize);

실행결과: 화면을 조절하였을때 배경색이 바뀐다.

### copy

복사를 했을때 발생하는 이벤트


ex)

       function handleWindowCopy(){
       alert("copier!");
       }
        
    window.addEventListener("copy",handleWindowCopy);
실행결과: 복사를 하였을때 `copier!` 이라고 뜬다. 

# 와이파이 관련

+ online : 와이파이가 연결이되었을때
+ offline: 와이파이 연결이 되지 않았을때

사용법


ex) 

      function handleWindowOffline(){
      
          alert("SoS no wifi");
        }


       function handleWindowonline(){
        alert("All good");
       }
      window.addEventListener("offline",handleWindowOffline);
      window.addEventListener("online",handleWindowonline);
      

실행결과:

와이파이가 연결이 되었을때: All good!
와이파이가 연결이 되지 않을때: Sos no wifi

