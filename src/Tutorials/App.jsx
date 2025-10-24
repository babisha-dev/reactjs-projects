import './App.css'
import { useState } from 'react';
import Clickme from './click.jsx';
function MyButton(){
 const [show, setShow] = useState(false);

  return (
    <div>
      <button type='button' onClick={() => setShow(true)}>
        Click Me
      </button>
      {show && <Clickme />}
    </div>
);
}
function sum(k){
  return 2*k;
}
function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}


export default function MyApp(){
  return(
    <div>
    <h1 className="head">My first tutorial {1*2} and {sum(2)}</h1>
    <MyButton/>
       </div>
  );
}