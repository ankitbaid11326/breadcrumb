import React, { Component } from 'react';

class AddDir extends Component {
    state = {
        showField: false,
        text: ''
    };

    showField = () => {
        this.setState({
            showField: true
        });
    };

    onChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    closeForm = () => {
        this.setState({
            text: '',
            showField: false
        });
    };

    CreateDirectory = () => {
        const pwd = this.props.pwd;
        this.props.addDir(this.state.text, pwd);
    };

    render() {
        if (this.state.showField) {
            return (
                <div className="row inputArea">
                    <div className="textField">
                        <input type="text" value={this.state.text} name="text" onChange={this.onChange} />
                    </div>
                    <div className="submitButton">
                        <button className="btn btn-success" onClick={this.CreateDirectory}>
                            Submit Button{' '}
                        </button>
                    </div>
                    <div className="closeButton">
                        <button className="btn btn-danger circle" onClick={this.closeForm}>
                            x{' '}
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="row inputArea">
                <div className="col-md-4">
                    <button className="btn btn-success" onClick={this.showField}>
                        Add Dir{' '}
                    </button>
                </div>
            </div>
        );
    }
}

export default AddDir;
