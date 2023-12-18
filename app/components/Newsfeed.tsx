"use client";

import News from "./News";
import Error from "./Error";
import Loading from "./Loading";
import { CardBody, CardContainer, CardHeader } from "./Card";
import { Post } from "@/types/payload-types";
import { useFetch } from "../lib/hooks";

const Newsfeed = () => {
  const { data, error, loading } = useFetch<Post[]>(
    `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}posts`,
  );

  if (loading) return <Loading double={true} />;
  if (error) return <Error error={error} />;

  return (
    <>
      {!data || data.length === 0 ? (
        <CardContainer>
          <CardHeader titel="News" />
          <CardBody>
            <p className="text-center">Keine News vorhanden.</p>
          </CardBody>
        </CardContainer>
      ) : (
        data
          .sort(
            (a, b) =>
              new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
          )
          .map((post) => <News key={post.id} data={post} />)
      )}
    </>
  );
};

export default Newsfeed;
