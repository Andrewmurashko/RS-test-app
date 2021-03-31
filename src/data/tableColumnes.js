export const columns = [
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