import React, { useState } from 'react'

const App = () => {
  // donot change prev state directly, create a newState value
  // let [state, setState] = useState(0);
  let [user, setUser] = useState([{name:"Ridhima",age:20}]);

  function increaseByOne() {
    // useState(state++) // cannot do this
    // state = state + 1; //can do this
    let newState = state + 1;
    setState(newState)
  }

  // [{name:"Ridhima",age:20}] --> "Ridam",21 --> [{name:"Ridhima",age:20},{name:"Ridam",age:21}]
  function addUser(name, age) {
    // user.push(name,age) // [{name:"Ridhima",age:20},"Ridam", 21]

    // user.push({name:name , age:age})
    // setUser(user);
    // cannot do the above cz we shouldnot change the prev state. it should remain immutable

    // let newUser = [];
    // user.forEach((u) => newUser.push(u))
    // newUser.push({name:name, age:age});
    // setUser(newUser)
    //[1,2,3]= ... ===>1,2,3, [{},{},{}] = ... ===>{},{},{}
    let newUser = [...user, {name:name, age:age}]; //spread operator
    setUser(newUser);
  }

  return (
    <div> 
      {
        user.map((u) =>{
        return(<div>
          <h2>Name : {u.name}</h2>
          <h4>Age :  {u.age}</h4>
          </div>
        )
    })}
    <button onClick={()=>addUser("Ridhima",20)}>Add user</button>

    </div>
  )
}

export default App