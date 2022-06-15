import { themes } from './theme-context';
import { climbingAccents, climbingFieldSets } from './initial.data';

export const saveToLocalStorage = (key, obj) => {
  localStorage.setItem(key.toLowerCase(), JSON.stringify(obj));
};

export const heighlighKeyWord = (str) => {
  const indexOfRightTag = str.indexOf('<');
  const indexOfLeftTag = str.indexOf('>');
  const textToHighlight = str.slice(indexOfRightTag + 1, indexOfLeftTag);
  const restText = str.slice(indexOfLeftTag + 1);
  return (
    <p className='tasks__description first-letter-cup'>
      <span style={{ color: '#0d6efd' }}>{textToHighlight}</span> {restText}
    </p>
  );
};

export const objHasKey = (obj, key) => obj.includes(key);

export const excludeValueFromArray = (arr, valueToExclude) =>
  arr.filter((value, index) => value !== valueToExclude);

export const fieldsetsBasedOnSport = (sport) => {
  switch (sport) {
    case 'лазание':
      return climbingFieldSets;
    default:
      return climbingFieldSets;
  }
};

export const buttonColorBasedOnBgColor = (bgColor) => {
  const climbBgColor = themes['лазание'].bgColor;
  const workoutBgColor = themes['воркаут'].bgColor;
  const trampolineBgColor = themes['батут'].bgColor;
  const trickingBgColor = themes['трикинг'].bgColor;

  let buttonColor;
  switch (bgColor) {
    case climbBgColor:
      buttonColor = '#183657';
      return buttonColor;
    case workoutBgColor:
      buttonColor = '#370404';
      return buttonColor;
    case trampolineBgColor:
      buttonColor = '#674237';
      return buttonColor;
    case trickingBgColor:
      buttonColor = '#40560A';
      return buttonColor;
    default:
      return buttonColor;
  }
};

export const calcStats = (tasks) => {
  let accentIndex = 0;
  return new Array(climbingAccents.inputs.length).fill(0).map((zeroValue) => {
    let stat = 0;
    tasks.forEach((task) => {
      if (task['акцент'] === climbingAccents.inputs[accentIndex]) stat++;
    });
    accentIndex++;
    return stat;
  });
};
