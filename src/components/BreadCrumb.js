import React, { Component } from 'react';
import GenerateTree from './GenerateTree';

class BreadCrumb extends Component {
    state = {
        activeDir: ''
    };

    render() {
        // console.log(this.props);
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
