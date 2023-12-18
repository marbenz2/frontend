import { LinkType } from "@/types/types";
import Link from "next/link";

const links: LinkType[] = [
  { href: "/pages/impressum", text: "Impressum" },
  { href: "/pages/datenschutz", text: "Datenschutz" },
];

const Footer = () => {
  return (
    <footer className="mt-12 grid w-full grid-cols-2 bg-stone-300 p-2">
      <aside className="self-end justify-self-center ">
        <p className="text-sm">Musikverein Grafenberg</p>
        <p className="text-sm font-semibold">&copy; 2023 - MarBenz</p>
      </aside>
      <aside className="self-end justify-self-center">
        <ul className="text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <a className="transition-all duration-300 ease-in-out hover:text-red-400">
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;
