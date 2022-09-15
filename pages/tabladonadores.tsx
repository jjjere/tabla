import * as React from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getMaxListeners } from 'process';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'mail', headerName: 'Mail', width: 180 },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 50,
  },
  {
    field: 'dni',
    headerName: 'DNI',
    type: 'number',
    width: 110,
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
  { id: 1, lastName: 'Barboza', firstName: 'Jeremias', age: 19, dni: 44568952, mail: 'jeremias@gmailcom' },
  { id: 2, lastName: 'Gomez', firstName: 'German', age:30, dni: 88235410, mail: 'germangomez@gmail.com'  },
  { id: 3, lastName: 'Rodriguez', firstName: 'Vera', age: 42, dni: 332574198, mail: 'verarodr@gmail.com' },
  { id: 4, lastName: 'Collado', firstName: 'Carmen', age: 25, dni: 44125639, mail: 'carmencollado@gmail.com'  },
  { id: 5, lastName: 'Chavez', firstName: 'Eulogio', age: 35, dni: 26584235, mail: 'eulochvz@gmail.com'  },
  { id: 6, lastName: 'Grau', firstName: 'Evangelina', age: 56, dni: 59841239, mail: 'evagrau@gmail.com'  },
  { id: 7, lastName: 'Camacho', firstName: 'Manuel', age: 96, dni: 23569874, mail: 'manucam@gmail.com'  },
  { id: 8, lastName: 'Pedraza', firstName: 'Monica', age: 23, dni: 26784130, mail: 'monipdrz@gmail.com'  },
  { id: 9, lastName: 'Miranda', firstName: 'Mariano', age: 28, dni: 45328975, mail: 'marianmrnd@gmail.com'  },
  { id: 10, lastName: 'Piñero', firstName: 'Maria', age: 47, dni: 36985210, mail: 'mariapñro@gmail.com'  },
  { id: 11, lastName: 'Valdes', firstName: 'Luis', age: 65, dni: 30254678, mail: 'luisvlades@gmail.com'  },
  /*{ id: 12, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 13, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 14, lastName: '', firstName: '', age:, dni: , mail: ''  },
  { id: 15, lastName: '', firstName: '', age:, dni: , mail: ''  },*/
];

export default function DataTable() {
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
