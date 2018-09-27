import React, { Component } from 'react';
import NodeData from './NodeData';

class GenerateTree extends Component {
    state = {
        isSelected: this.props.isActive
    };

    showClindren = e => {
        e.preventDefault();
        this.setState({
            isSelected: !this.state.isSelected
        });
    };

    render() {
        let { parent, data } = this.props;
        parent = `${parent}/${data}`;

        if (this.state.isSelected) {
            return (
                <li key={this.props.thekey}>
                    <NodeData parent={parent} data={data} showChildrenNodes={this.showClindren} />
                    {this.props.children && (
                        <ul>
                            {this.props.children.map((child, i) => (
                                <GenerateTree
                                    thekey={`${child.data}${i}`}
                                    {...child}
                                    parent={parent}
                                    isActive={false}
                                />
                            ))}
                        </ul>
                    )}
                </li>
            );
        } else {
            return (
                <li key={this.props.thekey}>
                    <NodeData parent={`${parent}`} data={data} showChildrenNodes={this.showClindren} />
                </li>
            );
        }
    }
}

export default GenerateTree;
