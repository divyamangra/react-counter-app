
import './App.css';
import React, {useState} from 'react';

function App() {


const [count, setCount]=useState(()=>{return 1})

// const [count, setCount]=useState(1); we arent using it as causes the usestate to run everytime setcount is called


  function increment(){
    setCount(count=>count+1)
    // setCount(count+1) 
  }

  function decrement(){
   setCount(count=>count-1)
    // setCount(count-1) //calling in this way doesnt help as it takes the value we get first like count = 0 and then running this method will cause it to change to -5 rather than -6
    // setCount(count-5)
  }
  function reset(){
    setCount(0);
  }

  return (
    <div className="App">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <p>
          <button onClick={reset}>Reset</button>
        </p>
        {/* <Divyam></Divyam> */}
    </div>
  );
}




// function Divyam() {
//   return (
//     <div className="2ndcomp">
//         Second object
//     </div>
//   );
// }

// class Divyam1 extends Component{
//   render(){
//     return 
//     (
//       <div className="App">
//         Third object
//       </div>
//     );
//   }
// }

export default App;
