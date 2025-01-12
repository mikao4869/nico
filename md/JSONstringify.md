# JSON.stringify

javaScript object나 array 또는 어떤 javaSrcipt 코드 간에 `string`으로 만들어줌


      function saveToDos(){ 
      localStorage.setItem("todos",JSON.stringify(toDos));
    }


ex)


      name:John,
      age: 30

JSON.stringify를 사용한후 


    "name":"John",
    "age":30,

이런식으로 바뀐다.


이 코드를 보면 `text--> array`가 된다


# JSON.parse

ex)


    {"title":"conference","age":10}


JSON.parse를 사용한 후


    title:'conference'
    age:10


`aray ---> text` 가 된다. 

# JSON.stringify와 JSON.parse의 차이

+ JSON.stringify: 객체--> JSON
+ JSON.parse:     JSON--> 객체


