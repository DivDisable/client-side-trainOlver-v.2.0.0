import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { calcStats } from '../../utilize';
import { diagramDefault, diagramOpts } from '../../initial.data';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Diagram({ tasks }) {
  diagramDefault.datasets[0].data = calcStats(tasks);
  return <Doughnut data={diagramDefault} options={diagramOpts} />;
}
