import React, { Component } from 'react';

class LimitedText extends Component {
    render() {
        return (
            <p className="card-text">{this.props.text}</p>
        )
    }
}

export default LimitedText;