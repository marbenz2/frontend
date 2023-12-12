import { CardBody, CardContainer, CardHeader } from "./Card";
import { NewsType } from "@/types/types";

type key = string;

function News({ data }: { data: NewsType }, key: key) {
  return (
    <CardContainer key={key}>
      <CardHeader
        title={data.attributes.title}
        date={data.attributes.date}
        authors={data.attributes.authors}
      />
      <CardBody content={data.attributes.content} />
    </CardContainer>
  );
}

export default News;
