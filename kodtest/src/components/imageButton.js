import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import logo from '../img/saabLogo.png'

class ImageButton extends Component {
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.props.showOrHideImg}>{this.props.buttonName}</Button>
                <div>{this.props.showImage ? <img alt="Saab logo" src={logo} /> : ""}</div>
            </div>
        )
    }
}

export default ImageButton;