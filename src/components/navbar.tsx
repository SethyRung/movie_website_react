import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/movie",
      name: "Movie",
    },
    {
      to: "/contacts",
      name: "Contacts",
    },
    {
      to: "/about-us",
      name: "About us",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const route = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [route]);

  return (
    <div className="bg-tertiary-500 sticky top-0">
      <div className="h-14 px-4 tablet:px-16 desktop:px-52 flex justify-between items-center">
        <img src="/src/assets/logo.svg" alt="logo" />
        <ul className="hidden tablet:flex justify-between items-center gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    "w-full h-10 flex flex-col justify-center items-center gap-1 transition-all hover:text-primary-500 hover:after:w-3/4 hover:after:border-b-2 hover:after:border-b-primary-500",
                    isActive
                      ? "text-primary-500 after:w-3/4 after:border-b-2 after:border-b-primary-500"
                      : ""
                  )
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="relative hidden tablet:block">
          <Icon
            icon="mdi-magnify"
            width="24"
            className="text-grey-500 absolute left-2 top-2/4 translate-y-[-50%] search-icon"
          />
          <input
            type="text"
            placeholder="Search here"
            className="w-56 h-8 px-2 pl-8 bg-tertiary-500 border border-grey-500 focus:outline-none focus:border-primary-500 text-white"
          />
        </div>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="tablet:hidden">
          {isNavOpen ? (
            <Icon icon="mdi-close" width="24" color="white" />
          ) : (
            <Icon icon="mdi-menu" width="24" color="white" />
          )}
        </button>
      </div>
      {isNavOpen ? (
        <ul className="py-2 tablet:hidden">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    "w-full h-10 flex justify-center items-center text-white text-center",
                    isActive ? "text-primary-500" : ""
                  )
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
