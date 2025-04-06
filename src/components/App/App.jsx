import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import Loader from "../Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import css from "./App.module.css";
import {
  selectTasks,
  selectIsLoading,
  selectIsError,
  updateClicks,
  selectTaskCount,
} from "../../redux/tasksSlice.js";
import { fetchTasks } from "../../redux/tasksOps";
import TextFilter from "../TextFilter/TextFilter.jsx";
// import { useActionData } from "react-router-dom";

export default function App() {
  const clicks = useSelector((state) => state.tasks.clicks);
  const taskCount = useSelector(selectTaskCount);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <button onClick={() => dispatch(updateClicks())}>clicks{clicks}</button>
      <p>Total task count: {taskCount}</p>
      <TaskForm />
      <TextFilter />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      {tasks.length > 0 && <TaskList />}
    </main>
  );
}
