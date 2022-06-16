import React from "react";

function Darkmode() {

    const buttonstyle= { marginleft:"50%," ,padding:"15px",background:"blue"}
    let light = false;
    const id = () => {

        light =!light
        if(light=== true){
            document.body.style.backgroundColor="black";
        }else{
            document.body.style.backgroundColor="white";
        }
    }
    return (  
        <>
            <h1 style={{ textalign:"center"}}>hello</h1>
            <button style = {buttonstyle} onClick={() => id()}>Darkmode</button>
        </>


    );
} 
export default Darkmode; 