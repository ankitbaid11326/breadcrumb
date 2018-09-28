import React, { Component } from 'react';
import NodeData from './NodeData';

class GenerateTree extends Component {
    state = {
        isSelected: this.props.isActive
    };

    showClindren = e => {
        e.preventDefault();
        this.setState(
            {
                isSelected: !this.state.isSelected
            },
            () => {
                const { parent, data } = this.props;
                this.props.activeDir(`${parent}/${data}`);
            }
        );
    };

    render() {
        let { parent, data, activeDir } = this.props;
        parent = `${parent}/${data}`;

        if (this.state.isSelected) {
            return (
                <li key={this.props.thekey}>
                    <NodeData parent={parent} data={data} showChildrenNodes={this.showClindren} />
                    {this.props.children && (
                        <ul>
                            {this.props.children.map((child, i) => (
                                <GenerateTree
                                    key={`/${child.data}${i}`}
                                    {...child}
                                    parent={parent}
                                    isActive={false}
                                    activeDir={activeDir}
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
