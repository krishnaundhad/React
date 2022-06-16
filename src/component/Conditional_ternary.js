import { useState } from "react";
function Conditional_ternary() {
    const [Login, setLogin]=useState(false)
    const Loginhandler=()=>{
            setLogin(!Login)
    }
    return ( 
        <div className="main">
            {Login?<div><h1>Logining... </h1></div>:<div><h1>Logout...</h1></div>}
            <button onClick={()=>Loginhandler()}>submit</button>
        </div>
     );
}

export default Conditional_ternary;