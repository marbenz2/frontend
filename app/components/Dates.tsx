"use client";

import { useState, useRef } from "react";
import { Date } from "@/types/payload-types";
import { CardBody, CardContainer, CardHeader } from "./Card";

const Dates = ({ data }: { data: Date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (modalRef.current) {
      modalRef.current.classList.toggle("h-0");
      modalRef.current.classList.toggle("p-4");
      modalRef.current.classList.toggle("overflow-hidden");
      modalRef.current.classList.toggle("h-fit");
      modalRef.current.classList.toggle("border");
    }
  };

  return (
    <>
      <article
        onClick={handleClick}
        className="flex w-fit cursor-pointer rounded-md border border-stone-300 bg-white p-2 shadow-md transition-all duration-300 ease-in-out hover:border-red-400"
      >
        <table className="text-sm">
          <tbody>
            <tr>
              <th>{data.dates.datum}</th>
            </tr>
            <tr>
              <td>{data.dates.title}</td>
            </tr>
          </tbody>
        </table>
      </article>

      <aside
        ref={modalRef}
        className="absolute left-0 top-0 z-10 h-0 w-full overflow-hidden rounded-b-md border-stone-300 bg-white bg-opacity-80 backdrop-blur-md transition-all duration-200 ease-in-out"
      >
        <article className="flex flex-col gap-2">
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-b border-stone-300">
                <th className="w-1/5">Titel:</th>
                <td>{data.dates.title}</td>
              </tr>
              <tr className="border-b border-stone-300">
                <th className="w-1/5">Datum:</th>
                <td>{data.dates.datum}</td>
              </tr>
              {/*               <tr className="border-b border-stone-300">
                <th>Zeit:</th>
                <td>
                  {data.dates.startzeit}{" "}
                  {data.dates.endzeit ? "- " + data.dates.endzeit : ""}
                </td>
              </tr> */}
              {/*               <tr className="border-b border-stone-300">
                <th>Ort:</th>
                <td>{data.dates.ort}</td>
              </tr> */}
              {/*               <tr className="border-b border-stone-300">
                <th>Abteilung</th>
                <td>{data.dates.abteilung}</td>
              </tr> */}
              <tr>
                <th>Beschreibung:</th>
                <td>{data.dates.content}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center">
            {/*             <button className="w-fit self-center rounded-md border border-red-400 bg-red-400 px-4 py-1 text-sm transition-all duration-200 ease-in-out hover:bg-opacity-10">
              Zum Kalender hinzufügen.
            </button> */}
            <button
              onClick={handleClick}
              className="w-fit text-sm transition-all duration-200 ease-in-out"
            >
              Schließen
            </button>
          </div>
        </article>
      </aside>
    </>
  );
};

export default Dates;
