"use client";

import News from "./News";
import { CardBody, CardContainer, CardHeader } from "./Card";
import { NewsType } from "@/types/types";
import Error from "./Error";
import { useFetch } from "../lib/hooks";
import Loading from "./Loading";

const Newsfeed = () => {
  const { data, error, loading } = useFetch<NewsType[]>(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "posts",
  );

  //Loading and Error State
  if (loading) return <Loading double={true} />;
  if (error) return <Error error={error} />;

  return (
    <>
      {!data ? (
        <CardContainer>
          <p className="p-2">Keine Inhalte vorhanden.</p>
        </CardContainer>
      ) : (
        //Sorting news for date new > old
        data
          .sort((a, b) => {
            if (a.attributes.date > b.attributes.date) return -1;
            if (a.attributes.date < b.attributes.date) return 1;
            return 0;
          })
          .map((post, index) => <News key={index} data={post as NewsType} />)
      )}
    </>
  );
};

export default Newsfeed;
