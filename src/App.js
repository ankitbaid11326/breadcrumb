import React, { Component } from 'react';
import './App.css';
import Tree from './utils/Tree';

// Components
import BreadCrumb from './components/BreadCrumb';

class App extends Component {
    state = {
        breadCrumb: new Tree()
    };

    componentDidMount() {
        const tree = new Tree();
        tree.add('root');
        tree.add('folder 1', 'root');
        tree.add('folder 1.1', 'folder 1');
        tree.add('folder 1.1.1', 'folder 1.1');
        tree.add('folder 1.1.2', 'folder 1.1');
        tree.add('folder 1.1.3', 'folder 1.1');
        tree.add('folder 1.2', 'folder 1');
        tree.add('folder 1.2.1', 'folder 1.2');
        tree.add('folder 1.3', 'folder 1');
        tree.add('folder 2', 'root');
        tree.add('folder 2.1', 'folder 2');
        tree.add('folder 2.2', 'folder 2');
        tree.add('folder 3', 'root');
        tree.add('folder 3.1', 'folder 3');
        tree.add('folder 3.2', 'folder 3');
        tree.add('folder 3.2.1', 'folder 3.2');
        tree.add('folder 3.3', 'folder 3');
        this.setState({ breadCrumb: tree });
    }

    render() {
        const { breadCrumb } = this.state;
        return (
            <div>
                <h1> Playment </h1>
                <BreadCrumb tree={breadCrumb} />
            </div>
        );
    }
}

export default App;
