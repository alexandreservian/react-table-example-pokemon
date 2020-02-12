import React from 'react';
import Thumbnail from './thumbnail';
import Types from './types';

const Cell = ({ className, cellData, column }) => {
  const { dataKey } = column;
  switch(dataKey){
    case 'thumbnail':
      return <Thumbnail src={cellData} />
    case 'type':
        return <Types types={cellData} />
    default:
      return <div className={className}>{cellData}</div>;
  }
}

export default {
  TableCell: Cell,
}