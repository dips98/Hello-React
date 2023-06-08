import React from "react";

const Hello = ()=>{
    // return <div> <h1>Hello React</h1> </div>
    return React.createElement('div', {id:'mydiv', className:'Lopi'}, React.createElement('h1',{id:"Dops"}, 'Hello React'));
}

export default Hello