const Footer = () => {
  return (
    <footer className="mt-12 grid w-full grid-cols-2 bg-stone-300 p-2">
      <aside className="self-end justify-self-center ">
        <p className="text-sm">Musikverein Grafenberg</p>
        <p className="text-sm font-semibold">&copy; 2023 - MarBenz</p>
      </aside>
      <aside className="self-end justify-self-center">
        <ul className="text-sm">
          <li>
            <a href="/impressum">Impressum</a>
          </li>
          <li>
            <a href="/datenschutz">Datenschutz</a>
          </li>
        </ul>
      </aside>
    </footer>
  );
};

export default Footer;
