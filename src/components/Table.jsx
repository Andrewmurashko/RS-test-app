import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentEmployeeId } from '../redux/actions/workLog';
import { DataGrid } from '@material-ui/data-grid';

function Table({ history }) {
  const { employees } = useSelector(({ employeesState }) => employeesState);
  const dispatch = useDispatch();

  const employeeClickHandler = (e) => {
    const employeeId = e.id;
    dispatch(setCurrentEmployeeId(employeeId));
    history.push(`/employee/${employeeId}`);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70, description: 'Индивидуальный номер сотрудника' },
    { field: 'lastName', headerName: 'Фамилия', width: 160 },
    { field: 'firstName', headerName: 'Имя', width: 160 },
    {
      field: 'middleName',
      headerName: 'Отчество',
      width: 160,
    },
    {
      field: 'birthDate',
      headerName: 'Дата рождения',
      type: 'string',
      width: 160,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      sortable: false,
      width: 160,
    },
  ];

  return (
    <div style={{ height: 500, width: 900, cursor: 'pointer' }}>
      <DataGrid
        rows={employees.sort((prev, curr) => (prev.lastName > curr.lastName ? 1 : -1))}
        columns={columns}
        pageSize={10}
        onCellClick={employeeClickHandler}
      />
    </div>
  );
}

export default withRouter(Table);
