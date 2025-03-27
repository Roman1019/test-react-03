import { useSelector } from "react-redux";
import Balance from "../Balance.jsx";
import LangSwitcher from "../LangSwitcher.jsx";
import "./App.css";
import NoteForm from "../NoteForm.jsx";
import NoteList from "../NoteList.jsx";

export default function App() {
  const appLang = useSelector((state) => state.locale.lang);
  return (
    <>
      <Balance />
      <hr />
      <LangSwitcher />
      <h2>Language: {appLang}</h2>
      <hr />
      <NoteForm />
      <NoteList />
    </>
  );
}
