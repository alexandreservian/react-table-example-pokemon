//@flow
import React, { memo } from 'react';
import BaseTable, { AutoResizer } from 'react-base-table';
import 'react-base-table/styles.css';
import Empty from './empty';
import Loader from './loader';
import components from './components';
import { Content } from './style';


const Table = ({
  data,
  rowClassName,
  loading,
  children,
  rowKey
}) => {
  return (
    <Content>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed
            emptyRenderer={<Empty loading={loading} />}
            overlayRenderer={<Loader loading={loading} />}
            data={data}
            width={width}
            height={height}
            headerHeight={45}
            rowHeight={70}
            rowClassName={rowClassName}
            rowKey={rowKey}
            components={components}
          >
            {children}
          </BaseTable>
        )}
      </AutoResizer>
    </Content>
  );
};

export default memo(Table);
