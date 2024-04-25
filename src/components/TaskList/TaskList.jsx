import { TaskListItem } from '../../components'

import style from './TaskList.module.css'

const TaskList = () => {
  const tasks = [
    { id: 1, text: "Pet that dawg" },
    { id: 2, text: "Grocery shopping" },
    { id: 3, text: "Run some errands" },
  ]
  
  return (
    <ul className={style.TaskList}>
      {
        tasks.length ? (
          tasks.map(task => <TaskListItem key={task.id} text={task.text} />)
        ) : (
          <li>The list is empty.</li>
        )
      }
    </ul>
  );
};

export { TaskList };
