import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [author, setAuthor] = useState("Sarubo");

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data = [] } = await api.get("/tasks");
    setTasks([...data]);
  };

  const addTask = async (task) => {
    const { data: new_task } = await api.post("/tasks", {
      text: task.text,
    });

    setTasks((currentState) => {
      return [...currentState, new_task];
    });
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);

    const new_tasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(new_tasks);
  };

  const editTask = async (id, text) => {
    const { data: updated_task } = await api.put(`/tasks/${id}`, {
      text: text,
    });

    console.log('task updated (data from API): ', updated_task)

    const new_tasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        return {
          ...updated_task,
          text: updated_task.text,
        };
      }
    });

    setTasks(new_tasks);
  };

  useEffect(() => {
    console.log("AppContext was mounted.");
    fetchTasks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        author,
        tasks,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
