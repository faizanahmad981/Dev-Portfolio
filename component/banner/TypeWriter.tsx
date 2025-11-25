"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const  TypewriterComp=() =>{
  return (
    <div style={{ fontSize: "32px", fontWeight: "500" }}>
      <TypeAnimation
        sequence={[
          'Hello, my name is', // first line
          1000, // wait 1s
          () => {
            console.log('Typed out!');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
}
export default TypewriterComp;
