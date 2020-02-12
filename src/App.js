import React from 'react';
import { Table, Column } from './components/table';
import pokedex from './pokedex';
import columnDefinition from './column-definition';
import createPokedex from './utils/create-pokedex';

const dataTable = createPokedex(pokedex); 

function App() {
  return (
    <Table data={dataTable}>
      {columnDefinition.map((colum, index) => (
        <Column key={index} {...colum} />
      ))}
    </Table>
  );
}

export default App;
