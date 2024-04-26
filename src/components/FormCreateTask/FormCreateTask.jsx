import { useState } from "react";

import { TextInput, Button } from "../../components";

import style from "./FormCreateTask.module.css";

const FormCreateTask = (props) => {
  const [text, setText] = useState("");

  const { setTasks } = props;

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

    setTasks((currentState) => {
      return [...currentState, task];
    });

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
