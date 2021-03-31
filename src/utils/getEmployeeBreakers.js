import { getWorklog } from '../db/api';

export async function prepareBreakers(setDigitData) {
  const currentWorkLog = await getWorklog();
  const workLogWithNumDate = currentWorkLog.map((el) => ({
    ...el,
    from: new Date(el.from).getTime(),
    to: new Date(el.to).getTime(),
  }));
  const sortedWorkLog = workLogWithNumDate.sort((el1, el2) => el1.from - el2.from);
  setDigitData(sortedWorkLog);
}

export function getBreakers(data) {
  let presentEmployees = 6;
  let dataIndex = 0;
  let breakers = [];
  while (dataIndex <= data.length - 1) {
    let currentEmployee = data[dataIndex];
    if (
      data.filter((el) => el.id !== currentEmployee.id && el.from < currentEmployee.from < el.to)
    ) {
      if (presentEmployees < 3) {
        breakers.push(currentEmployee.id);
        presentEmployees = 6;
      } else {
        presentEmployees -= 1;
      }
    } else {
      presentEmployees -= 1;
    }
    dataIndex += 1;
  }
  return breakers;
}
