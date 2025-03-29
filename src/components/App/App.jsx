import { useSelector } from "react-redux";
import Balance from "../Balance.jsx";
import LangSwitcher from "../LangSwitcher.jsx";
import "./App.css";

export default function App() {
  const appLang = useSelector((state) => state.locale.lang);
  return (
    <>
      <Balance />
      <hr />
      <LangSwitcher />
      <h2>Language: {appLang}</h2>
    </>
  );
}
