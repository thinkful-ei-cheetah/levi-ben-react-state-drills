import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           chamber: null,
           spinningTheChamber: false,
        };
    }

    timeout = () => {
        this.setState({
            chamber: Math.ceil(Math.random() * 8),
            spinningTheChamber: false,
        })
        console.log(this.state.chamber);
    }

    pullTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.time = setTimeout(() => this.timeout(), 2000)
    }

    display = () => {
        if (this.state.spinningTheChamber)  {
            return "spinning the chamber and pulling the trigger!...";
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return "BANG!!!!";
        } else {
            return "you're safe!";
        }
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    render() {
        return (
            <div>
                <p>{this.display()}</p>
                <button onClick={() => this.pullTrigger()}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;