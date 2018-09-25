import React, { Component } from 'react';

function GenerateTree(props) {
    // console.log(props.thekey);
    const parent = `${props.parent}/${props.data}`;
    return (
        <li key={props.thekey}>
            <a href={`${parent}`}>{props.data}</a>
            {props.children && (
                <ul>
                    {props.children.map((child, i) => (
                        <GenerateTree thekey={`${props.thekey}${i}`} {...child} parent={parent} />
                    ))}
                </ul>
            )}
        </li>
    );
}

class BreadCrumb extends Component {
    state = {
        activeDir: ''
    };

    render() {
        console.log(this.props);
        const { tree } = this.props;
        if (tree.root) {
            return (
                <ul>
                    <GenerateTree {...tree.root} thekey={0} parent="" />
                </ul>
            );
        }
        return (
            <div>
                <h4> loading... </h4>
            </div>
        );
    }
}

export default BreadCrumb;
