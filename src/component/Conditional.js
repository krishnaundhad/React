import { useState } from "react";
import Message from "./Message";

function Conditional() {
    const [login, setLogin] = useState(false)
    
        const Login = () =>{
           // console.log("Login",login);
            setLogin(true)
        }
        const Logout = () =>{
            //console.log("Logout",login);
            setLogin(false)
        }
        if(login === false){
            return(
                <div>
                <Message message="Login Message"></Message>
                <button onClick={() => Login()}>Login</button>
                </div>
            )
        }else{
            return(
                <div>
                <Message message="Logout Message"></Message>
                <button onClick={() => Logout()}>Logout</button>
                </div>
            )
            }     
}
export default Conditional;