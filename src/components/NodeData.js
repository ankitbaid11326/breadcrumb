import React from 'react';

const NodeData = props => {
    const { parent, data } = props;
    return (
        <a href={`${parent}`} onClick={props.showChildrenNodes}>
            {data}
        </a>
    );
};

export default NodeData;
