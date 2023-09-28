import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import InwardData from './InwardData.json';
import { columns } from './columns';
import './table.css';

const BasicTable = () => {
  const columnsMemo = useMemo(() => columns, []); // Use columnsMemo instead of columns1
  const dataMemo = useMemo(() => InwardData, []); // Use dataMemo instead of data

  const tableInstance = useTable({
    columns: columnsMemo, // Use columnsMemo
    data: dataMemo, // Use dataMemo
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  // console.log(getTableProps)
  // console.log(getTableBodyProps)
  // console.log(headerGroups)
  // console.log(rows)
  // console.log(prepareRow)

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => ( // Use .headers instead of .header
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>; // Use 'Cell' instead of 'cell'
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;




// For learning :-
const data = [
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Gender",
    accessor: "gender"
  }
];

{data.map((i) => ( 
  <tr>
    
    <td>{i.id}</td>
    <td>{i.gender}</td>
  </tr>

) )}
