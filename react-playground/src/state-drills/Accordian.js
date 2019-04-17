import React from 'react';

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: "Section 1",
        };
    }

    renderAccordian = () => {
        console.log(this.props.sections);
        return this.props.sections.map(key =>
             <li>
                <button onClick={() => this.handleClick(key.title)}>{key.title}</button>
                {key.title === this.state.buttonClicked && <p>{key.content}</p>}
             </li>
        );
    }

    handleClick = title => {
        this.setState({
            buttonClicked: title,
        })
    }

    render() {
        return (
            <ul>
                {this.renderAccordian()}
            </ul>
        );
    }
}

export default Accordian;