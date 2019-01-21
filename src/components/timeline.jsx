import React, { Component } from 'react';
import SidebarCards from './sidebarCards';
import MainCards from './mainCards';
import { getMainData, getSidebarData } from '../services/data';

class Timeline extends Component {
    state = {
        mainData: [],
        sidebarData: []
    }

    componentDidMount() {
        this.setState({
            mainData: getMainData(),
            sidebarData: getSidebarData()
        })
    }

    componentDidUpdate() {
        console.log("data saved!")
    }

    handleLike = (card, section) => {
        const currentState = section === 'sidebar' ? [...this.state.sidebarData] : [...this.state.mainData];
        const indexCard = currentState.indexOf(card);
        currentState[indexCard] = { ...currentState[indexCard] };
        currentState[indexCard].liked = !currentState[indexCard].liked;

        currentState[indexCard].likes =
            currentState[indexCard].liked ?
                currentState[indexCard].likes + 1 :
                currentState[indexCard].likes - 1;

        if (section === 'sidebar') {
            this.setState({
                sidebarData: currentState
            })
        }

        if (section === 'main') {
            this.setState({
                mainData: currentState
            })
        }
    }

    render() {
        const sectionLabel = {
            sidebar: 'sidebar',
            main: 'main'
        }

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-2">
                        <SidebarCards data={this.state.sidebarData} handleLike={this.handleLike} section={sectionLabel.sidebar} />
                    </div>
                    <div className="col-md-6">
                        <MainCards data={this.state.mainData} handleLike={this.handleLike} section={sectionLabel.main} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Timeline;