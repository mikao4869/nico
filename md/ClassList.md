# ClassList

정의 :class들의 목록으로 잡억할수 있게 끔 허용해준다.


## ClassName 과 차이점은?

`className`은 해당 요소에 지정된 class값을 의미합니다. 

하지만className는 무언가를 대입하면 class 전체가 바뀌어버리죠. 

클래스 하나만 조작하고 싶을 때 사용하고 싶을 때 사용할 수 없습니다.


반면에 `classList`는 JavaScript에서 노드의 클래스를 다룰 수 있도록 제공되는 기능이에요. 
클래스를 하나만 조작할 수 있으며 add, remove, contains, toggle등의 함수를 사용할 수 있죠!



# toggle

`toggle`은 h1의 classList에 clicked class가 있는지 확인

만약에 있으면 toggle은 clicked를 제거