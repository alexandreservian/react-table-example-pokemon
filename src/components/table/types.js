import React,{Fragment,memo} from 'react';
import {Type} from './style';

const Types = ({types}) => {
    return (
    <Fragment>
      {types.map((type, index) => (
        <Type type={type} key={index}>{type}</Type>
      ))}
    </Fragment>
    );
}

export default memo(Types);