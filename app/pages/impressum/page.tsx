"use client";

import Container from "../../components/Container";
import Frame from "../../components/Frame";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useFetch } from "../../lib/hooks";
import { CardBody, CardContainer, CardHeader } from "../../components/Card";
import { Impressum, User } from "@/types/payload-types";

export default function Home() {
  const { data, error, loading } = useFetch<Impressum[]>(
    process.env.NEXT_PUBLIC_PAYLOAD_API_URL + "impressum",
  );

  console.log(data);

  //Loading and Error State
  if (loading) return <Loading double={false} />;
  if (error) return <Error error={error} />;

  return (
    <Container>
      <Frame className="2xl:w-full">
        {!data || data.length === 0 ? (
          <CardContainer>
            <CardHeader />
            <CardBody>
              <p className="text-center">
                Keine Einträge im Impressum vorhanden.
              </p>
            </CardBody>
          </CardContainer>
        ) : (
          <CardContainer>
            <CardHeader
              titel={data[0].impressum.titel}
              updatedAt={data[0].updatedAt}
              autor={data[0].impressum.autor as User}
            />
            <CardBody content={data[0].impressum.content.root.children} />
          </CardContainer>
        )}
      </Frame>
    </Container>
  );
}
