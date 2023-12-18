import Textchecker from "./Textchecker";
import { Date, Post, User } from "@/types/payload-types";

type CardContainerProps = {
  children: React.ReactNode;
};

type CardHeaderProps = {
  titel?: Post["post"]["titel"] | Date["termin"]["titel"];
  updatedAt?: Post["updatedAt"] | Date["updatedAt"];
  autor?: User;
};

type CardBodyProps = {
  content?: Post["post"]["content"]["root"]["children"];
};

export const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <section className="flex w-full flex-col overflow-hidden rounded-md border border-stone-300 bg-white shadow-md">
      {children}
    </section>
  );
};

export const CardHeader = ({
  titel,
  updatedAt,
  autor,
  children,
}: React.PropsWithChildren<CardHeaderProps>) => {
  return (
    <header className="flex flex-col justify-end bg-red-100 p-2">
      {titel && <h3 className="text-xl font-bold sm:text-2xl">{titel}</h3>}
      {autor && updatedAt && (
        <div className="flex justify-between">
          <p className="text-xs text-neutral-500">{updatedAt}</p>
          <p className="text-xs text-neutral-500">
            {`${autor.firstName} ${autor.lastName}`}
          </p>
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
    <article className="flex flex-col p-2">
      {content &&
        content.map((item, index) => <Textchecker key={index} item={item} />)}
      {children}
    </article>
  );
};
