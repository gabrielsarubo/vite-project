import { useState } from "react";

import { useAppContext } from "../../hooks";
import { TextInput, Button } from "../../components";

import style from "./FormCreateTask.module.css";

const FormCreateTask = () => {
  const [text, setText] = useState("");

  const { addTask } = useAppContext()

  const onChangeText = (e) => {
    setText(e.currentTarget.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const task = {
      id: Math.random(),
      text: text,
    };

    addTask(task)
    
    setText("");
  };

  return (
    <form className={style.FormCreateTask} onSubmit={onSubmitForm}>
      <TextInput value={text} onChange={onChangeText} />
      <Button text="+" />
    </form>
  );
};

export { FormCreateTask };
