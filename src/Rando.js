import React, { Component} from "react";

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
        this.makeTimer();
    }

    makeTimer(){
        setInterval(() => {
            let randomNum = Math.floor(Math.random() * this.props.maxNum);
            this.setState({num: randomNum})
        }, 1000)
    }
    render() {
        return(
        <h1>The stateNum is: {this.state.num}</h1>
        )
    }
}

export default Rando;