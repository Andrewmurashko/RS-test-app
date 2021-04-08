import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main, Employee } from './pages';
import { fetchEmployees } from './redux/actions/employees';
import './utils/forTests';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="content">
      <h2 className="content__title">
        Таблица проверки соблюдения внутреннего распорядка больницы
      </h2>
      <div className="wrapper">
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/employee/:id" component={Employee}></Route>
      </div>
    </div>
  );
}

export default App;
