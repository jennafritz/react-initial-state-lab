import React from 'react';
import ReactDOM from 'react-dom';
// your Bomb code here!
class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        return this.state.secondsLeft === 0 ? (`Boom!`) : (`${this.state.secondsLeft} seconds left before I go boom!`)
    }
}

export default Bomb