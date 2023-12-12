"use client";

import { useState } from "react";

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  { href: "/", text: "Home" },
  { href: "/about", text: "Über uns" },
  { href: "/press", text: "Presse" },
  { href: "/youth", text: "Jugendkapelle" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);

    const modal = document.getElementById("mobile-menu");
    const text = document.getElementById("mobile-text");
    modal?.classList.toggle("w-0");
    modal?.classList.toggle("w-full");
    text?.classList.toggle("opacity-0");
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <nav className="sticky top-0 z-30 flex flex-col  bg-white shadow-md">
        <div className="flex justify-between p-4">
          <a className="flex flex-col gap-1" href="/">
            <h1 className="text-md w-fit bg-red-400 py-1 pl-2 pr-8 font-bold text-black shadow-md sm:text-xl">
              Musikverein
            </h1>
            <h1 className="-mt-2 ml-8 w-fit bg-black py-1 pl-2 pr-8 text-xl font-bold tracking-tight text-red-400 shadow-md sm:text-3xl">
              GRAFENBERG
            </h1>
            <h2 className="sm:text-md -mt-1 ml-4 w-fit rotate-2 bg-red-400 pl-2 pr-8 pt-1 font-serif text-sm text-black shadow-md">
              ... mehr als nur Blasmusik!
            </h2>
          </a>
          <div className="z-50 flex self-center lg:hidden">
            <button
              onClick={handleClick}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div
                className={`h-1 w-12 rounded-sm bg-red-400 transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-3 rotate-45" : "translate-y-0 rotate-0"
                }`}
              ></div>
              <div
                className={`h-1 w-12 rounded-sm bg-red-400 transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`h-1 w-12 rounded-sm bg-red-400 transition-all duration-300 ease-out ${
                  isOpen
                    ? "-translate-y-3 -rotate-45"
                    : "-translate-y-0 rotate-0"
                }`}
              ></div>
            </button>
          </div>
          <div className="hidden items-end lg:flex">
            <ul className="flex h-full gap-8">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="flex h-full items-end justify-center"
                >
                  <a
                    className="h-fit text-xl font-medium text-black transition-all duration-300 ease-in-out hover:text-red-400"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="flex w-full bg-black">
          <p className="mx-auto px-4 py-1 text-sm text-white">
            Und so einfach werden Sie Mitglied im Musikverein Grafenberg:{" "}
            <span className="font-semibold">
              <a className="underline" href="#">
                Anmeldeformular
              </a>
            </span>
          </p>
        </aside>
        <section
          id="mobile-menu"
          className="absolute left-0 top-0 z-40 h-screen w-0 overflow-hidden bg-white bg-opacity-50 backdrop-blur-md transition-all duration-200 ease-in-out"
        >
          <ul
            id="mobile-text"
            className="flex h-full flex-col justify-around py-12 text-center opacity-0 transition-all duration-100 ease-in-out"
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="flex h-full items-center justify-center"
              >
                <a
                  className="h-fit text-2xl transition-all duration-300 ease-in-out hover:text-red-400"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navigation;
