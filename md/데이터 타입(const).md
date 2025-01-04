# 데이터 타입 



# const와 let의 차이

`const`는 값 변경(업데이트)를 할수없지만

`let`은 가능하다

ex)


### const로 값 변경한 경우

    const Seohyeonbeautiful=false;
    Seohyeonbeautiful=true;

    --> 불가능

### let으로 값 변경한 경우

    let Seohyeonbeautiful=false;
    Seohyeonbeautiful=true;

    --> 가능


# 규칙 

+ 항상 `const`를 사용
+ 가끔(값이 변경이 될떄는) `let` 사용
+ 절대로! `var` 사용불가


###  array.push 

마지막으로 요소가 추가가 된다. 

        const toBuy=["meat","water"];
        toBut.push("orange");
        console.log(toBuy);

결과:

        meat, water,orange