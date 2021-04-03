import { getWorklog } from '../db/api';

export async function prepareBreakers(setDigitData) {
  const currentWorkLog = await getWorklog();
  const workLogWithNumDate = currentWorkLog.map((el) => ({
    ...el,
    from: new Date(el.from).getTime(),
    to: new Date(el.to).getTime(),
  }));
  const sortedWorkLog = workLogWithNumDate.sort((el1, el2) => el1.from - el2.from);
  console.log(sortedWorkLog);
  setDigitData(sortedWorkLog);
}

export function getBreakers(data) {
  let breakers = [];
  for (let i = 0; i < data.length; i++) {
    let absentsTime = data[i];
    if (isIntervalViolateRules(data, i)) {
      breakers.push(absentsTime.id);
    }
  }
  console.log(breakers);
  return breakers;
}

function calcIntersectionTimeCount(absentTimeIntervals, currentIndex) {
  const currentInterval = absentTimeIntervals[currentIndex];
  let counter = 0;
  for (let i = 0; i < currentIndex; i++) {
    const interval = absentTimeIntervals[i];
    if (interval.from <= currentInterval.from && currentInterval.from <= interval.to) {
      counter++;
    }
  }
  return counter;
}

function isIntervalViolateRules(absentTimeIntervals, currentIndex) {
  const currentInterval = absentTimeIntervals[currentIndex];
  let counter = 0;
  for (let i = 0; i < currentIndex; i++) {
    const interval = absentTimeIntervals[i];
    if (interval.from <= currentInterval.from && currentInterval.from <= interval.to) {
      if (++counter === 3) {
        return true;
      }
    }
  }
  return false;
}
