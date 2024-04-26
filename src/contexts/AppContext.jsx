import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [author, setAuthor] = useState("Sarubo");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Pet that dawg" },
    { id: 2, text: "Grocery shopping" },
    { id: 3, text: "Run some errands" },
  ]);

  const addTask = (task) => {
    setTasks((currentState) => {
      return [...currentState, task];
    });
  }

  const deleteTask = (id) => {
    const new_tasks = tasks.filter(task => {
      return task.id !== id
    })
    
    setTasks(new_tasks)
  }

  const editTask = (id, text) => {
    const new_tasks = tasks.map(task => {
      if (task.id !== id) {
        return task
      } else {
        return {
          ...task,
          text,
        }
      }
    })

    setTasks(new_tasks)
  }

  return (
    <AppContext.Provider
      value={{
        author,
        tasks,
        addTask,
        deleteTask,
        editTask
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
