import Logo from "../Logo/Logo";
import { NavLink, Link } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 transition-colors ${
              isActive
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-200"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-lg px-3 py-2 transition-colors ${
              isActive
                ? "bg-primary text-primary-content"
                : "text-base-content hover:bg-base-200"
            }`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar relative z-50 mx-auto w-full rounded-b-xl bg-base-100 px-3 shadow-sm sm:px-6 lg:px-8">
      {/* Navbar Start */}
      <div className="navbar-start min-w-0 flex-1">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            aria-label="Open navigation menu"
            className="btn btn-ghost btn-square"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="ml-1 min-w-0">
          <Logo />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-2 px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex-1">
        <Link
          to="/movies"
          className="btn btn-secondary btn-sm whitespace-nowrap sm:btn-md"
        >
          Explore Movies
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
