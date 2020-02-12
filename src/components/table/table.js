//@flow
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BaseTable, { AutoResizer } from 'react-base-table';
import 'react-base-table/styles.css';
import Empty from './empty';
import Loader from './loader';
import components from './components';
import { Content } from './style';


const Table = ({
  data,
  loading,
  children,
  rowKey,
  sortBy,
  headerHeight,
  rowHeight,
  onColumnSort,
  onClickRow,
  onDoubleClickRow,
  rowClassName
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
            headerHeight={headerHeight}
            rowHeight={rowHeight}
            rowClassName={rowClassName}
            rowKey={rowKey}
            components={components}
            sortBy={sortBy}
            onColumnSort={onColumnSort}
            rowEventHandlers={{
              onClick: onClickRow,
              onDoubleClick: onDoubleClickRow
            }}
          >
            {children}
          </BaseTable>
        )}
      </AutoResizer>
    </Content>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  rowKey: PropTypes.string,
  sortBy: PropTypes.object,
  headerHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  onColumnSort: PropTypes.func,
  onClickRow: PropTypes.func,
  onDoubleClickRow: PropTypes.func,
  rowClassName: PropTypes.func

}

Table.defaultProps = {
  sortBy: {}
}

export default memo(Table);
