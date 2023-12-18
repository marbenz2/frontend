import { CardBody, CardContainer, CardHeader } from "./Card";
import { Post, User } from "@/types/payload-types";

function News({ data }: { data: Post }) {
  return (
    <CardContainer>
      <CardHeader
        titel={data.post.titel}
        updatedAt={data.updatedAt}
        autor={data.post.autor as User}
      />
      <CardBody content={data.post.content.root.children} />
    </CardContainer>
  );
}

export default News;
