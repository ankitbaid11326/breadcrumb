import React, { Component } from 'react';
import GenerateTree from './GenerateTree';
import ActiveDir from './ActiveDir';
import AddDir from './AddDir';

class BreadCrumb extends Component {
    state = {
        fullDir: ''
    };

    setActiveDir = val => {
        this.setState({ fullDir: val });
    };

    render() {
        const pwd = this.state.fullDir.split('/').pop();
        const { tree, addDir } = this.props;
        if (tree.root) {
            return (
                <div className="row">
                    <div className="activeDir">
                        <ActiveDir fullDir={this.state.fullDir} />
                        <AddDir addDir={addDir} pwd={pwd} />
                    </div>

                    <ul>
                        <GenerateTree {...tree.root} thekey={0} parent="" activeDir={this.setActiveDir} />
                    </ul>
                </div>
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
