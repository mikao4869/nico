# html에서 뭔가를 받을떄 사용하는 함수

functin는 총 3가지 가 있다.

+ getElementById
+ getElementsByClassName()
+ getElementsByTagName()


이거에 대해서 하나하니씩 설명을 하자면


## getElementById(): 

하나의 id를 반환해줄때 사용한다(array)

## getElementsByClassName():

많은 element를 한번에 가져야하는 경우(array)

즉 `Class Name을 반환할때 사용한다.`

## getElementByTagName():

 element들을 가져올수 있다.(array)

즉 `name 할당 가능하고 array에 할당한다.`

그렇지만 사람들은 사용하는것은 ..!

## querySelector 와 querySelector All

`querySelector`는?

element를 css 방식으로 검색할 수있다.


단 하나의 element를 return 해준다


ex)

id
     
      const title=document.querySelector(".hello h1");

  css class hello를 찾고 그 안에 h1을 찾는것이다. 

  css 처럼 사용가능한것이 특징
  ### 사용법

  `.`을 찍고 class 이름을 쓴다.

### 만약에 class 가아닌 id는 어떻게 할까?

`#`을 붙여서 사용

ex)

      const title=document.querySelector("#hello");


이 코드는 

    const title=document.geElementById("Hello") 

와 같다. 
*** 

### querySelector은 하나만 가져오기 때문에 같은 클래스에서 여러개를 가져오기 위해서는..!

`querySelecterAll`을 사용한다. 

## querySelectorAll

selector 안의 조건에 부합하는 `모든` element를 가져다줌

