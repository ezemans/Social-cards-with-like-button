import React, { Component } from 'react';

class Like extends Component {
    render() {
        const { card, handleLike, section } = this.props;
        const likeCssClass = card.liked ? "fa fa-heart" : "fa fa-heart-o";

        return (
            <i className={likeCssClass} onClick={() => handleLike(card, section)}> <span>{card.likes}</span></i>
        )
    }
}

export default Like;