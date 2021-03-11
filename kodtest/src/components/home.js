import React, { Component } from 'react';
import IncrementButton from './incrementButton';
import ImageButton from './imageButton';

class Home extends Component {
    constructor(props) {
        super(props);

        this.incrementOne = this.incrementOne.bind(this)
        this.showOrHideImg = this.showOrHideImg.bind(this)

        this.state = {
            showImage: true,
            buttonName: "Hide",
            number: 0
        };
    }
    incrementOne(){
        this.setState({number: this.state.number +1})
    }
    showOrHideImg(){
        console.log("works")
        this.setState({showImage: !this.state.showImage})
        if(this.state.buttonName === "Hide")
            this.setState({buttonName: "Show"})
        else 
            this.setState({buttonName: "Hide"})
    }
    render() {
        return (
            <div>
                <IncrementButton number={this.state.number} incrementOne={this.incrementOne}/>
                <ImageButton showImage={this.state.showImage} buttonName={this.state.buttonName} showOrHideImg={this.showOrHideImg}/>
            </div>
        )
    }
}

export default Home;