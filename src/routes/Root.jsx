import headerStyle from "@styles/header.module.css";
import { Link, Outlet } from "react-router";
import { PATHS } from "@constants/paths";

const NAVIGATION_LINKS = [
  { path: PATHS.HOME, label: "Home" },
  { path: PATHS.ABOUT, label: "About" },
  { path: PATHS.CONTACT, label: "Contact" },
  { path: PATHS.ERROR, label: "Error" },
];

export default function Root() {
  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <nav className={headerStyle.headerLinks}>
          {NAVIGATION_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="header-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
