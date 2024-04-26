import { useAppContext } from "../../hooks";
import { TaskListItem } from "../../components";

import style from "./TaskList.module.css";

const TaskList = () => {
  const { tasks } = useAppContext();

  return (
    <ul className={style.TaskList}>
      {tasks.length ? (
        tasks.map((task) => <TaskListItem key={task.id} id={task.id} text={task.text} />)
      ) : (
        <li>The list is empty.</li>
      )}
    </ul>
  );
};

export { TaskList };
