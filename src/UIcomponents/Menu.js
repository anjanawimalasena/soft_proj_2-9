import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Example from './Paybutton';
import { XGrid } from '@material-ui/x-grid';

const rows = [
  {
    id: 1,
    Teacher: 'Ajanth Dissanayake',
    Class: '2016 A/L',
    Fee_Rupees   : 1500,
  },
  {
    id: 2,
    Teacher: 'Mahen Jecob',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 3,
    Teacher: 'Manoj Pathiraja',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 4,
    Teacher: 'Nadun Rajakaruna',
    Class: '2016 A/L',
    Fee_Rupees  : 1500,
  },

  {
    id: 5,
    Teacher: 'Sunil Rathnayaka',
    Class: '2016 A/L',
    Fee_Rupees   : 1500,
  },
  {
    id: 6,
    Teacher: 'Nimal Hettiarachchi',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 7,
    Teacher: 'Kesiri withanage',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 8,
    Teacher: 'Wasantha yapabandara',
    Class: '2016 A/L',
    Fee_Rupees  : 1500,
  },


  {
    id: 9,
    Teacher: 'Darshana ukuwela',
    Class: '2016 A/L',
    Fee_Rupees   : 1500,
  },
  {
    id: 10,
    Teacher: 'Nimal perera',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 11,
    Teacher: 'Amila suraweera',
    Class: '2016 A/L',
    Fee_Rupees : 1500,
  },
  {
    id: 12,
    Teacher: 'Amila senadeera',
    Class: '2016 A/L',
    Fee_Rupees  : 1500,
  },

  {
    id: 13,
    Teacher: 'Ajanth Dissanayake',
    Class: '2016 Revision',
    Fee_Rupees   : 1500,
  },
  {
    id: 14,
    Teacher: 'Mahen Jecob',
    Class: '2016 Revision',
    Fee_Rupees : 1500,
  },
  {
    id: 15,
    Teacher: 'Manoj Pathiraja',
    Class: '2016 Revision',
    Fee_Rupees : 1500,
  },
  {
    id: 16,
    Teacher: 'Nadun Rajakaruna',
    Class: '2016 Revision',
    Fee_Rupees  : 1500,
  },

  {
    id: 17,
    Teacher: 'Akila awantha',
    Class: '2016 A/L',
    Fee_Rupees  : 1500,
  },
];

export default function ColumnMenu() {
  return (
    <div style={{ height: 480, width: 870 }}>
      <DataGrid
        columns={[
          { field: 'Teacher', type: 'string' , width: 200 ,},
          { field: 'Class', type: 'string' , width:200 },
          { field: 'Fee_Rupees', type: 'string' , width:150},
          { field: 'Purchase' , width: 300,
          renderCell: () => (
            <strong style={{marginTop:'10px'}}>
              <Example/>
            </strong>
          )
        }
        ]}
        rows={rows}
      />
    </div>
  );
}


