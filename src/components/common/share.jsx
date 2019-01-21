import React, { Component } from 'react';

class Share extends Component {
    render() {
        return (
            <i className="fa fa-retweet"> {this.props.shared}</i>
        )
    }
}

export default Share;