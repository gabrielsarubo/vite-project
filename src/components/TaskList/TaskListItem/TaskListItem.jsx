import { Button, BUTTON_VARIANT } from "../../../components";

import style from "./TaskListItem.module.css";

const TaskListItem = (props) => {
  const { text } = props
  
  return (
    <li className={style.TaskListItem}>
      {text}
      <Button text="-" variant={BUTTON_VARIANT.SECONDARY} />
    </li>
  );
};

export { TaskListItem };
