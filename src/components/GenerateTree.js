import React, { Component } from 'react';

class GenerateTree extends Component {
    state = {
        isSelected: this.props.isActive
    };

    showClindren = () => {
        this.setState({
            isSelected: !this.state.isSelected
        });
    };

    shouldComponentUpdate(nextProps, nextState) {}

    render() {
        const parent = `${this.props.parent}/${this.props.data}`;

        if (this.state.isSelected) {
            console.log('Performing If Part...!');
            return (
                <li key={this.props.thekey}>
                    <a href={`${parent}`} onClick={this.showClindren}>
                        {this.props.data}
                    </a>
                    {this.props.children && (
                        <ul>
                            {this.props.children.map((child, i) => (
                                <GenerateTree thekey={`${this.props.thekey}${i}`} {...child} parent={parent} />
                            ))}
                        </ul>
                    )}
                </li>
            );
        } else {
            console.log('Performing Else Part...!');
            return (
                <li key={this.props.thekey}>
                    <a href={`${parent}`} onClick={this.showClindren}>
                        {this.props.data}
                    </a>
                </li>
            );
        }
    }
}

export default GenerateTree;
