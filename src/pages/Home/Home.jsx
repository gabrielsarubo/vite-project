import { useState } from "react";

import { FormCreateTask, TaskList } from "../../components";

import style from "./Home.module.css";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Pet that dawg" },
    { id: 2, text: "Grocery shopping" },
    { id: 3, text: "Run some errands" },
  ]);

  return (
    <div className={style.Home}>
      <FormCreateTask setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export { Home };
