import React from "react";  
import Typewriter from 'typewriter-effect';  

export default function TypewriterComp() {  
    return (  
        <div style={{ fontSize: "32px", }}>  
            <Typewriter  
                onInit={(typewriter) => {  
                    typewriter.typeString('Hello, my name is')  
                        .callFunction(() => {  
                            console.log('String typed out!');  
                        })  
                        .pauseFor(1000000)  
                        .start();  
                }}  
            />  
        </div>  
    );  
}
