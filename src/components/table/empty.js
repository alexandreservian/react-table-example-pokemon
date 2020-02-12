import React, { Fragment, memo } from 'react';
import { EmptyBox } from './style';

const Empty = ({ loading }) => {
  return <Fragment>{!loading && <EmptyBox>Tabela está vazia</EmptyBox>}</Fragment>;
};

export default memo(Empty);
