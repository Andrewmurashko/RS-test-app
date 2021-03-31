import { getWorklog } from '../db/api';

export async function prepareBreakers(setData) {
  const currentWorkLog = await getWorklog();
  const workLogWithNumDate = currentWorkLog.map((el) => ({
    ...el,
    from: new Date(el.from).getTime(),
    to: new Date(el.to).getTime(),
  }));
  const sortedWorkLog = workLogWithNumDate.sort((el1, el2) => el1.from - el2.from);
  setData(sortedWorkLog);
  console.log(sortedWorkLog);
}

export function getBreakers(data) {
  let counter = 6;
  let dataIndex = 0;
  let breakers = [];
  while (dataIndex <= data.length - 1) {
    let currentEmployee = data[dataIndex];

    if (
      data.filter((el) => el.id !== currentEmployee.id && el.from < currentEmployee.from < el.to)
    ) {
      if (counter < 3) {
        breakers.push(currentEmployee.id);
        counter = 6;
      } else {
        counter -= 1;
      }
    }
    dataIndex += 1;
    //   console.log(breakers);
  }
  return breakers;
}
