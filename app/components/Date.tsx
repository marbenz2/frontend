"use client";

import { useState } from "react";

import { DateType } from "@/types/types";
import { Fragment } from "react";
import Calendar from "./Calendar";

type key = number;

const Date = ({ data }: { data: DateType }, key: key) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    const modal = document.getElementById(data.attributes.title);
    modal?.classList.toggle("h-0");
    modal?.classList.toggle("p-4");
    modal?.classList.toggle("overflow-hidden");
    modal?.classList.toggle("h-fit");
    modal?.classList.toggle("border");
  };

  return (
    <>
      <Calendar>
        {
          <article
            key={key}
            onClick={handleClick}
            className="flex w-fit cursor-pointer rounded-md border border-stone-300 bg-white p-2 shadow-md transition-all duration-300 ease-in-out hover:border-red-400 "
          >
            <table className="text-sm">
              <tbody>
                <tr>
                  <th>{data.attributes.date}</th>
                </tr>
                <tr>
                  <td>{data.attributes.title}</td>
                </tr>
              </tbody>
            </table>
          </article>
        }
      </Calendar>
      <aside
        id={data.attributes.title}
        className="absolute left-0 top-0 z-10 h-0 w-full overflow-hidden rounded-b-md border-stone-300 bg-white bg-opacity-80 backdrop-blur-md transition-all duration-200 ease-in-out"
      >
        <article className="flex flex-col gap-2">
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-b border-stone-300">
                <th className="w-1/5">Datum:</th>
                <td>{data.attributes.date}</td>
              </tr>
              <tr className="border-b border-stone-300">
                <th>Zeit:</th>
                <td>{data.attributes.time}</td>
              </tr>
              <tr className="border-b border-stone-300">
                <th>Ort:</th>
                <td>{data.attributes.location}</td>
              </tr>
              <tr className="border-b border-stone-300">
                <th>Abteilung</th>
                <td>{data.attributes.title}</td>
              </tr>
              <tr>
                <th>Beschreibung:</th>
                <td>
                  {data.attributes.description
                    ? data.attributes.description.map((item, index) =>
                        item.children[0].text ? (
                          <Fragment key={index}>
                            {item.children[0].text} <br />
                          </Fragment>
                        ) : (
                          <br key={index} />
                        ),
                      )
                    : null}
                </td>
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

export default Date;
