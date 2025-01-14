# filter 함수

filter 함수에 대해서

만약에 우리가 `array`에서 뭔가를 지우고 싶다고 한다.


    지우는것이 아니라 지우고 싶은 요소를 빼고 새로운 array를 생성해야한다.


이렇게 개념을 잡으면 쉽다.

이걸 하기 위해서는 `filter`함수를 사용해야한다.

# 작동방법은?
 

 ex)

    function sexyfilter(){


    }


    [1,2,3,4].filter(sexyfilter)


설명: `1,2,3,4` 값을 sexyfilter에게 값을 넘겨준다.
만약에 그 값이 `true`이라면 계속 이어가고 
그 값이 `false`라면 그 값은 넘겨주지 않는다.



그러면 sexyfilter은 그 값을 갖고 `총 4번 각각 1,2,3,4번 실행한다.`

## 설명을 더한 예시 코드

    const arr=["pizza","lala"]


    function aa(item){
      return item!="pizza"
    }

이 코드에 대해서 설명을 하자면 

retuern item이 pizza가 아니라면 `true` 이면 pizza이면 `false`라고 생각하면 된다.




### true이면 실행을 하고 false이면 실행을 하지 않는다.!


