import React, {Component} from 'react'

// export const Welcome = () => <h1>Welcome to goa singam</h1>

class Welcome extends Component {
    render(){
        const {name, heroname} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome to {name} AKA {heroname}</h1>
    }
}
export default Welcome