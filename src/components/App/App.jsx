import { useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";
// import { useActionData } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const isLoading = useSelector((state) => state.tasks.loading);
  const isError = useSelector((state) => state.tasks.error);
  useEffect(() => {
    dispatch(fetchTasks(999));
  }, [dispatch]);

  return (
    <main className={css.container}>
      <TaskForm />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      {tasks.length > 0 && <TaskList />}
    </main>
  );
}
