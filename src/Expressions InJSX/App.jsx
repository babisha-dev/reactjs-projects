//  Expressions inside curly braces
const Element=<h1>hello {5+5}</h1>;

// To insert large block of HTML use parenthesis
const Some= (
 
  <ul>
    <li>first</li>
        <li>second</li>

  </ul>
);

// One Top Level Element :"  for using multiple tags use a parent tag like div, empty tag<></>"
const Top= (
  <div>
    <p>first para</p>
    <p> Second para</p>
  </div>
);


// Elements must be closed
const Close=<input type="text"/>

// class==className in jsx
const Elem=<h1 className="myclass">hello</h1>

//comments is {/*like this */} in jsx

const Myelem=<h1> Hello {/*comment*/} </h1>
  