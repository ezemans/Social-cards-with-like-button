import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h5 className="card-title">{this.props.username}</h5>
        )
    }
}

export default Title;