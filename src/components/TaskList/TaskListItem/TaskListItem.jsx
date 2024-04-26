import { useAppContext } from "../../../hooks";
import { Button, BUTTON_VARIANT } from "../../../components";

import style from "./TaskListItem.module.css";

const TaskListItem = (props) => {
  const { deleteTask } = useAppContext();

  const { id, text } = props;

  const handleClick = () => {
    deleteTask(id);
  };

  return (
    <li className={style.TaskListItem}>
      {text}
      <Button
        text="-"
        variant={BUTTON_VARIANT.SECONDARY}
        onClick={handleClick}
      />
    </li>
  );
};

export { TaskListItem };
