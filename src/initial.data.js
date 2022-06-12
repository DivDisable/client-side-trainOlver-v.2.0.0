import climbing from './Climbing.svg';
import workout from './Workout.svg';
import tricking from './Tricking.svg';
import trampoline from './Trampoline.svg';

// ------ data for navigation -----
export const sports = ['лазание', 'воркаут', 'батут', 'трикинг'];
export const sportImages = [climbing, workout, trampoline, tricking];
// ------ data for navigation -----

// ------ data for fields -----
const climbingDifficultyLvl = {
  label: 'уровень сложности',
  inputs: ['новичок', 'любитель', 'спортсмен', 'CTTL']
};

const climbingMods = {
  label: 'мод',
  inputs: ['лазание', 'ОФП', 'СФП', 'знаток', 'гимнастика', 'прочее']
};

export const climbingAccents = {
  label: 'акценты',
  inputs: [
    'сила',
    'ловкость',
    'ментал',
    'выносливость',
    'техника',
    'знаток',
    'прочее'
  ]
};

const climbingTrainers = {
  label: 'тренажеры',
  inputs: [
    'moonboard-classic',
    'beastmaker2000',
    'campus',
    'турник',
    'скалодром',
    'Прочее'
  ]
};

export const climbingFieldSets = [
  climbingDifficultyLvl,
  climbingAccents,
  climbingMods,
  climbingTrainers
];

// ------ data for fields -----

export const initialFormData = {
  'уровень сложности': [],
  мод: [],
  акценты: [],
  тренажеры: [],
  sport: 'лазание'
};

// ----- data for diagram -----

export let diagramDefault = {
  labels: climbingAccents.inputs,
  datasets: [
    {
      label: 'hello',
      data: [1, 1, 1, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(50, 100, 153, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(50, 100, 153, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export const diagramOpts = {
  plugins: {
    legend: {
      position: 'left'
    }
  },
  maintainAspectRatio: false
};

// ----- data for diagram -----
export const mockTasks = [
  {
    'уровень сложности': 'новичок',
    акцент: 'выносливость',
    мод: 'офп',
    тренажер: 'турник',
    описание: 'вис на турнике',
    options: {
      время: '15',
      подходы: '3'
    }
  },
  {
    'уровень сложности': 'новичок',
    акцент: 'выносливость',
    мод: 'сфп',
    тренажер: 'скалодром',
    описание: 'псевдо-вис* двумя руками',
    options: {
      время: '15',
      подходы: '3',
      'ширина полки': '20',
      'тип хвата': '-'
    }
  },
  {
    'уровень сложности': 'новичок',
    акцент: 'выносливость',
    мод: 'офп',
    тренажер: 'турник',
    описание: 'подъем коленей на турнике до уровня плечей',
    options: {
      повторения: '7',
      подходы: '3'
    }
  },
  {
    'уровень сложности': 'новичок',
    акцент: 'техника',
    мод: 'лазание',
    тренажер: 'скалодром',
    описание: 'лазание с постановкой ног на носочек',
    options: {
      перехваты: '20',
      подходы: '3',
      плоскость: '90'
    }
  },
  {
    'уровень сложности': 'новичок',
    акцент: 'техника',
    мод: 'лазание',
    тренажер: 'скалодром',
    описание: 'лазание с постановкой ног на зацепы одинакового цвета',
    options: {
      перехваты: '10',
      подходы: '3',
      плоскость: '90'
    }
  },
  {
    'уровень сложности': 'новичок',
    акцент: 'сила',
    мод: 'офп',
    тренажер: 'турник',
    описание: 'негативная фаза подтягивания* 4/2',
    options: {
      повторения: '2',
      подходы: '2'
    }
  }
];
