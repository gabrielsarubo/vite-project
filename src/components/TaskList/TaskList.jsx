import { TaskListItem } from "../../components";

import style from "./TaskList.module.css";

const TaskList = (props) => {
  const { tasks } = props

  return (
    <ul className={style.TaskList}>
      {tasks.length ? (
        tasks.map((task) => <TaskListItem key={task.id} text={task.text} />)
      ) : (
        <li>The list is empty.</li>
      )}
    </ul>
  );
};

export { TaskList };
