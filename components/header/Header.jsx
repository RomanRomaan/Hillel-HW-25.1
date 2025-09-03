import React from "react";

const colors = ['blue', 'black', 'green', 'red', 'purple', 'yellow']
const MIN_SIZE = 5;
const MAX_SIZE = 200;

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColor: 'blue',
            size: 30
        };


    }

    onClick = () => {
        const newColorindex = Math.floor(Math.random() * colors.length)
        this.setState({
            currentColor: colors[newColorindex]
        })
    }
    sizeLess = () => {
        const { size } = this.state;

        if ((size) <= MIN_SIZE) {
            return;
        }
        this.setState({
            size: size - 1
        });
    }
    sizeMore = () => {
        const { size } = this.state;

        if ((size) >= MAX_SIZE) {
            return;
        }
        this.setState({
            size: size + 1
        });
    }
    render() {
        const { title } = this.props;
        const { currentColor, size } = this.state
        return <div>
            <button onClick={this.sizeLess}>-</button>
            <h1 style={{ color: currentColor, fontSize: size + 'px' }} onClick={this.onClick} > {title}</h1>
            <button onClick={this.sizeMore}>+</button>
        </div>

    }
}