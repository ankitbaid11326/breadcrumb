import React from 'react';

const ActiveDir = props => {
    const dirs = props.fullDir.split('/');

    return (
        <div className="row">
            <div className="col-md-12 showPwd">
                {dirs.map((dir, i) => (
                    <div className="dir" key={`${dir}${i}`}>
                        {' '}
                        {dir} /{' '}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveDir;
