import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class IncrementButton extends Component {
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.props.incrementOne}>Increment one</Button>
                <div>{this.props.number}</div>
            </div>
        )
    }
}

export default IncrementButton;