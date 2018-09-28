import React from 'react';

const ActiveDir = props => {
    const dirs = props.fullDir.split('/');

    return (
        <div className="row">
            <div className="col-md-12 showPwd">
                {dirs.map(dir => (
                    <div className="dir" key={dir}>
                        {' '}
                        {dir} /{' '}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveDir;
