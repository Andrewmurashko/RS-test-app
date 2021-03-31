import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentEmployeeId } from '../redux/actions/workLog';
import {columns} from '../data/tableColumnes'

import { DataGrid } from '@material-ui/data-grid';

function Table({ history }) {
  const { employees, isLoaded } = useSelector(({ employeesState }) => employeesState);
  const dispatch = useDispatch();

  const employeeClickHandler = (e) => {
    const employeeId = e.id;
    dispatch(setCurrentEmployeeId(employeeId));
    history.push(`/employee/${employeeId}`);
  };
  

  return (isLoaded ?
    <div style={{ height: 500, width: 900, cursor: 'pointer' }}>
      <DataGrid
        rows={employees.sort((prev, curr) => (prev.lastName > curr.lastName ? 1 : -1))}
        columns={columns}
        pageSize={10}
        onCellClick={employeeClickHandler}
      />
    </div> : <div>Загрузка</div>
  );
}

export default withRouter(Table);
