import React, { Component } from 'react';
import Card from './common/card';
import CardWithPhoto from './common/cardWithPhoto';

class SidebarCards extends Component {
    render() {
        const { data, handleLike, section } = this.props;

        return (
            <div>
                {data.map(item => {
                    if (item.type === "card") { return <Card key={item._id} cardData={item} handleLike={handleLike} section={section} /> }
                    if (item.type == "cardWithPhoto") { return <CardWithPhoto key={item._id} cardData={item} handleLike={handleLike} section={section} /> }
                })}
            </div>
        )
    }
}

export default SidebarCards;