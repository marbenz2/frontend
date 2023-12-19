import { Datenschutz, Impressum, Post } from "@/types/payload-types";
import Image from "next/image";

type TextCheckerProps = {
  item: any;
};

const Textchecker = ({ item }: TextCheckerProps) => {
  if (item.type === "heading") {
    if (item.tag === "h1") {
      return <h1 className="text-4xl">{item.children[0].text}</h1>;
    }
    if (item.tag === "h2") {
      return <h2 className="text-3xl">{item.children[0].text}</h2>;
    }
    if (item.tag === "h3") {
      return <h3 className="text-2xl">{item.children[0].text}</h3>;
    }
    if (item.tag === "h4") {
      return <h4 className="text-xl">{item.children[0].text}</h4>;
    }
    if (item.tag === "h5") {
      return <h5 className="text-lg">{item.children[0].text}</h5>;
    }
    if (item.tag === "h6") {
      return <h6 className="text-base">{item.children[0].text}</h6>;
    }
  }
  if (item.type === "paragraph") {
    return <p className="text-sm">{item.children[0].text}</p>;
  }

  /*   if (item.type === "upload") {
    return (
      <Image
        priority
        className="float-left mb-2 mr-2 w-full rounded-md object-cover sm:mb-0 sm:w-1/3"
        src={`http://localhost:1337${item.}`}
        alt={item.value.altText}
        width={item.value.width}
        height={item.value.height}
      />
    );
  } */
};

export default Textchecker;
