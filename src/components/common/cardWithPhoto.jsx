import React, { Component } from 'react';
import Share from './share';
import LimitedText from './limitedText';
import Title from './title';
import Like from './like';
import Photo from './photo';

class CardWithPhoto extends Component {
    render() {
        const { cardData, handleLike, section } = this.props;
        return (
            <div className="card">
                <Photo photo={cardData.userPhoto} />
                <div className="card-body">
                    <Title username={cardData.username} />
                    <LimitedText text={cardData.text} />
                    <Share shared={cardData.shared} />
                    <Like card={cardData} handleLike={handleLike} section={section} />
                </div>
            </div>
        )
    }
}

export default CardWithPhoto;