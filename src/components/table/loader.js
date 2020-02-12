import React, { Fragment, memo } from 'react';
import { EmptyBox, LoaderElement } from './style';

const Loader = ({ loading }) => {
  return (
    <Fragment>
      {loading && (
        <EmptyBox>
          <LoaderElement />
        </EmptyBox>
      )}
    </Fragment>
  );
};

export default memo(Loader);
