import React, { Component } from 'react';

class Photo extends Component {
    render() {
        const imageData = this.props.photo;
        return (
            <img className="card-img-top" src={"data:image/jpeg;base64," + imageData} alt="Card image cap" />

        )
    }
}

export default Photo;