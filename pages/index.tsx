import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Nombre Completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Barboza', firstName: 'Jeremias', age: 19 },
  { id: 2, lastName: 'Locaso', firstName: 'Matias', age: 18 },
  { id: 3, lastName: 'Silva', firstName: 'Nicole', age: 19 },
  { id: 4, lastName: 'Sarubbi', firstName: 'Gino', age: 19 },
  { id: 5, lastName: 'Fiorentino', firstName: 'Nazareno', age: 19 },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
