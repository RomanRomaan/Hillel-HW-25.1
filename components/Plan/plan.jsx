import React from "react";

export default class Plan extends React.Component {
    render() {
        const { list } = this.props;
        return <ul>
            {list.map(item => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    }
}