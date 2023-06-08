import React, {Component} from 'react'

// export const Welcome = () => <h1>Welcome to goa singam</h1>

class Message extends Component {
    constructor(){
        super()
        this.state={
            message: "Welcome to visitor",
        }
    }

    changedMessage() {
        this.setState({
            message: "Thanks for subscribing"
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> {this.changedMessage()}}>Subscribe</button>
            </div>
        
        )
    }
}
export default Message