import { NewsType } from "@/types/types";
import Image from "next/image";

type key = number;

type CardContainerProps = {
  children: React.ReactNode;
};

type CardHeaderProps = {
  title?: NewsType["attributes"]["title"];
  date?: NewsType["attributes"]["date"];
  authors?: NewsType["attributes"]["authors"];
};

type CardBodyProps = {
  content?: NewsType["attributes"]["content"];
};

export const CardContainer = ({ children }: CardContainerProps, key: key) => {
  return (
    <section
      key={key}
      className="flex w-full flex-col overflow-hidden rounded-md border border-stone-300 bg-white shadow-md"
    >
      {children}
    </section>
  );
};

export const CardHeader = ({
  title,
  date,
  authors,
  children,
}: React.PropsWithChildren<CardHeaderProps>) => {
  return (
    <header className="flex flex-col justify-end bg-red-100 p-2">
      {title && <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>}
      {authors && date && (
        <div className="flex justify-between">
          <p className="text-xs text-neutral-500">{date}</p>
          <p className="text-xs text-neutral-500">{authors}</p>
        </div>
      )}
      {children}
    </header>
  );
};

export const CardBody = ({
  content,
  children,
}: React.PropsWithChildren<CardBodyProps>) => {
  return (
    <article className="float p-2">
      {content
        ? content.map((item, index: number) => {
            if (item.type === "heading") {
              if (item.level === 1) {
                return (
                  <h1 key={index} className="text-2xl font-bold">
                    {item.children[0].text}
                  </h1>
                );
              }
              if (item.level === 2) {
                return (
                  <h2 key={index} className="text-xl font-bold">
                    {item.children[0].text}
                  </h2>
                );
              }
              if (item.level === 3) {
                return (
                  <h3 key={index} className="text-lg font-bold">
                    {item.children[0].text}
                  </h3>
                );
              }
              if (item.level === 4) {
                return (
                  <h4 key={index} className="text-base font-bold">
                    {item.children[0].text}
                  </h4>
                );
              }
              if (item.level === 5) {
                return (
                  <h5 key={index} className="text-sm font-bold">
                    {item.children[0].text}
                  </h5>
                );
              }
              if (item.level === 6) {
                return (
                  <h6 key={index} className="text-xs font-bold">
                    {item.children[0].text}
                  </h6>
                );
              }
            }
            if (item.type === "image") {
              return (
                <Image
                  priority
                  className="float-left mb-4 mr-0 w-full rounded-md sm:mb-0 sm:mr-2 sm:w-1/2"
                  src={item.image.url}
                  key={item.image.hash}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alternativeText}
                />
              );
            }
            if (item.type === "paragraph") {
              if (item.children[0].underline)
                return (
                  <>
                    <p key={index} className="text-sm underline">
                      {item.children[0].text}
                    </p>
                    <br />
                  </>
                );
              if (item.children[0].bold)
                return (
                  <>
                    <p key={index} className="text-sm font-bold">
                      {item.children[0].text}
                    </p>
                    <br />
                  </>
                );
              if (item.children[0].italic)
                return (
                  <>
                    <p key={index} className="text-sm italic">
                      {item.children[0].text}
                    </p>
                    <br />
                  </>
                );
              if (item.children[0].strikethrough)
                return (
                  <p key={index} className="text-sm line-through">
                    {item.children[0].text}
                  </p>
                );
              if (item.children[0 + 1]) {
                <a href={item.children[0 + 1].url}>
                  {item.children[0 + 1].url}
                </a>;
              }
              if (!item.children[0].text) return <br />;
              return (
                <p key={index} className="mb-4 text-sm">
                  {item.children[0].text}
                </p>
              );
            }
            if (item.type === "list") {
              if (item.format === "unordered") {
                return (
                  <ul key={index} className="list-inside list-disc">
                    {item.children.map((item, index) => {
                      return (
                        <li key={index} className="text-sm">
                          {item.children[0].text}
                        </li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <ol key={index} className="list-inside list-decimal">
                    {item.children.map((item, index) => {
                      return (
                        <li key={index} className="text-sm">
                          {item.children[0].text}
                        </li>
                      );
                    })}
                  </ol>
                );
              }
            }
            if (item.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className="my-4 border-s-4 border-stone-300 bg-stone-200 p-2"
                >
                  <p className="text-sm italic leading-relaxed text-stone-900">
                    {item.children[0].text}
                  </p>
                </blockquote>
              );
            }
            if (item.type === "code") {
              return (
                <pre key={index} className="text-sm">
                  {item.children[0].text}
                </pre>
              );
            }
          })
        : children}
    </article>
  );
};
