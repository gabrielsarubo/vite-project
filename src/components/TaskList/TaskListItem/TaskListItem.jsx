import { useState } from "react";

import { useAppContext } from "../../../hooks";
import { Button, BUTTON_VARIANT, TextInput } from "../../../components";

import style from "./TaskListItem.module.css";

const TaskListItem = (props) => {
  const { deleteTask, editTask } = useAppContext();

  const { id, text } = props;

  const [f_text, setF_Text] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnBlur = () => {
    editTask(id, f_text);
    setIsEditing(false);
  };

  return (
    <li className={style.TaskListItem}>
      {isEditing ? (
        <TextInput
          defaultValue={f_text}
          onBlur={handleOnBlur}
          onChange={(e) => setF_Text(e.currentTarget.value)}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{text}</span>
      )}
      <Button
        text="-"
        variant={BUTTON_VARIANT.SECONDARY}
        onClick={() => deleteTask(id)}
      />
    </li>
  );
};

export { TaskListItem };
