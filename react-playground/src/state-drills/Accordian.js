import React from 'react';

class Accordian extends React.Component {
    static defaultProps = { sections: [] };
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: null,
        };
    }

    renderAccordian = () => {
        console.log(this.props.sections);
        if (this.props.sections.length > 0) 
            return (
                this.props.sections.map((key, index) =>
                <li key={index}>
                    <button onClick={() => this.handleClick(key.title)}>{key.title}</button>
                    {key.title === this.state.buttonClicked && <p>{key.content}</p>}
                </li>
            )
        );
        else return <li></li>
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