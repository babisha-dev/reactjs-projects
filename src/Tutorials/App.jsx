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
export default function MyApp(){
  return(
    <div>
    <h1 className="head">My first tutorial </h1>
    <MyButton/>
       </div>
  );
}