import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  return (
    <>
    <div>
  
      Number State : {number}
    </div>
    <button onClick={()=>{
// setNumber(number+1)
setNumber((currentNumber)=>{
  return currentNumber+1
  // setNumber 함수를 써주는 것. 함수형으로 업데이트를 해줌.
  // 직접 수정할 값이 아니라, 함수를 넣는 것. 
  // 그 함수의 인자에는 현재 state를 가져올 수 있다.
})
    }}
    >
      
      누르면 up</button>
  </>
  );
}

export default App;

// 원래는 useState가 return하는 값이 배열이다. 
// 그배열을 구조분해 할당으로 받은 것 뿐이다.
// const [state, setState] = useState(초기값);