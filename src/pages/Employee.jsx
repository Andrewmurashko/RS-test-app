import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { fetchWorkLog } from '../redux/actions/workLog';
import { getBreakers, prepareBreakers } from '../utils/getEmployeeBreakers';
import Button from '../components/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    width: 300,
  },
});

export default function Employee() {
  const classes = useStyles();
  const { workLog, isLoaded } = useSelector(({ workLogState }) => workLogState);
  const [digitWorkLog, setDigitWorkLog] = React.useState([]);
  const [breakesId, setBreakesId] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (digitWorkLog.length) {
      const breakesId = getBreakers(digitWorkLog);
      setBreakesId(breakesId);
    } else {
      dispatch(fetchWorkLog());
      prepareBreakers(setDigitWorkLog);
    }
  }, [digitWorkLog]);

  const onClickOmon = () => {
    window.confirm('Вы действительно хотите стать ЯБатькой?')
      ? alert('Потрачено...')
      : alert('Жыве Беларусь!');
  };

  return isLoaded ? (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Вышел</TableCell>
              <TableCell align="left">Вернулся</TableCell>
              <TableCell align="left">Опции</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workLog.map((row, index) => (
              <TableRow key={index} className={classNames({ "breaked": breakesId.includes(row.id) })}>
                <TableCell>{row.from}</TableCell>
                <TableCell align="left">{row.to}</TableCell>
                <TableCell align="left">
                  {breakesId.includes(row.id) && (
                    <Button
                      onClick={onClickOmon}
                      className={'button--add button--outline'}
                      children="Вызвать ОМОН"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/" className="button button--outline button--add go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </>
  ) : (
    <div>Загрузка</div>
  );
}
