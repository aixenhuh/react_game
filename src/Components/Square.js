import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <button classNmae="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square;