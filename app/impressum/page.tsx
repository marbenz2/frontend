"use client";

import { useFetch } from "../lib/hooks";
import { CardBody, CardContainer, CardHeader } from "../components/Card";
import Container from "../components/Container";
import Frame from "../components/Frame";
import { NewsType } from "@/types/types";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Home() {
  const { data, error, loading } = useFetch<NewsType>(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "impressum",
  );

  //Loading and Error State
  if (loading) return <Loading double={false} />;
  if (error) return <Error error={error} />;

  return (
    <Container>
      <Frame type="2xl:w-full">
        <CardContainer>
          <CardHeader title="Impressum" />
          <CardBody content={data?.attributes.content} />
        </CardContainer>
      </Frame>
    </Container>
  );
}
