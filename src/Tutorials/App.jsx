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
export default function MyApp(){
  return(
    <div>
    <h1 className="head">My first tutorial {1*2} and {sum(2)}</h1>
    <MyButton/>
       </div>
  );
}