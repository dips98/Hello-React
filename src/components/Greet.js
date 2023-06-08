import React from 'react'

// function Greet(){
//     return <h1> Hello Dips </h1>
// }

const Greet = props => {
    const {name, heroname} = props
    return (
        <div>
        <h1>{name} A.K.A {heroname}</h1>
        {props.children}
        </div>
        
    )
}

export default Greet