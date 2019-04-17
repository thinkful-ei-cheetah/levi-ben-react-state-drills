import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: "bomb",
            count: 0,
        };
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        // console.log(this.state.count);
    };
    componentDidMount() {
        this.interval = setInterval(() => {this.handleCount()}, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    display() {
        return this.state.count >= 8 ? "BOOM!!!!" : (
            this.state.count % 2 === 0 ? "tick" :
            "tock"
        );
    }
    render() {
        return (
            <div>
                <p>{this.display()}</p>
                <p>{this.state.count.toLocaleString()}</p>
            </div>
        );
    }
}

export default Bomb;