import React, { useState } from "react";


// export default function HomePage() {

//   let [userName,setUserName] = useState("") 

//   return (
//     <>
//     <div className="task p-5">
//         <p>Enter Your Name: {userName}</p>
//         <input type="text" onChange={(e) => {
//             setUserName(e.target.value)
//         }} name="" className="border border-gray-400 p-3 rounded-2xl mt-3" />
//     </div>
//     </>
//   );
// }


export default function HomePage() {

    let [user, setUser] = useState({
        name:"",
        age:""
    });

    function handelInputs(e) {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
    }

  return (
    <>
        <div className="task p-10">
            <div className="input-name flex flex-col mb-5">
                <label>Enter your name:{user.name}</label>
                <input onChange={handelInputs} name="name" className="border border-gray-400 p-3 rounded-2xl mt-3" type="text" placeholder="Name" />
            </div>
            <div className="input-name flex flex-col">
                <label>Enter your age:{user.age}</label>
                <input onChange={handelInputs} name="age" className="border border-gray-400 p-3 rounded-2xl mt-3" type="text" placeholder="Age" />
            </div>
        </div>
    </>
  )
}
