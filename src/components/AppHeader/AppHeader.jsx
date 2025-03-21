import { NavLink } from "react-router";
import css from "./AppHeader.module.css";
import clsx from "clsx";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppHeader() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={getLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={getLinkStyle}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
