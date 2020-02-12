import React,{useState, useEffect, memo} from 'react';
import { Table, Column } from './components/table';
import pokedex from './pokedex';
import columnDefinition from './column-definition';
import createPokedex from './utils/create-pokedex';

const dataTable = createPokedex(pokedex);

const handleOnColumnSort = (data, setData, setSortBy) => ({key, order}) =>{
  const dataSorted = [...data].sort((a, b) => order==='asc' ? a[key] - b[key] : b[key] - a[key]);
  setSortBy({key, order});
  setData([...dataSorted]);
}

const handleOnClickRow = (setSelectedRow) => ({ rowKey }) => {
  setSelectedRow(rowKey)
}

const handleOnDoubleClickRow = data => console.log(data);

const addClassNameRow = selectedRow => ({ rowData }) => {
  const { id } = rowData;
  const hasEqualRow = selectedRow === id;
  return hasEqualRow && 'active';
};

const App = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState({key:'id', order: 'asc'});
  const [loading, setLoad] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoad(false);
      setData(dataTable)
    },1000)
    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <Table 
      data={data} 
      loading={loading}
      rowKey="id"
      headerHeight={45}
      rowHeight={70}
      sortBy={sortBy} 
      onColumnSort={handleOnColumnSort(data, setData, setSortBy)}
      onClickRow={handleOnClickRow(setSelectedRow)}
      onDoubleClickRow={handleOnDoubleClickRow}
      rowClassName={addClassNameRow(selectedRow)}
    >
      {columnDefinition.map(({dataKey, ...restProps}) => (
        <Column key={dataKey} dataKey={dataKey} {...restProps} />
      ))}
    </Table>
  );
}

export default memo(App);
