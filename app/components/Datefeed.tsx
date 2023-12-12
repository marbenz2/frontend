"use client";

import { useFetch } from "../lib/hooks";
import Date from "./Date";
import { CardBody, CardContainer, CardHeader } from "./Card";
import { DateType } from "@/types/types";
import Error from "./Error";
import Loading from "./Loading";

const Datefeed = () => {
  const { data, error, loading } = useFetch<DateType[]>(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "shedules",
  );

  //Loading and Error State
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      {!data ? (
        <CardContainer>
          <p className="p-2">Keine Termine vorhanden.</p>
        </CardContainer>
      ) : (
        //Sorting dates present > future
        data
          .sort((a, b) => {
            if (a.attributes.date > b.attributes.date) return -1;
            if (a.attributes.date < b.attributes.date) return 1;
            return 0;
          })
          .map((date) => <Date key={date.id} data={date as DateType} />)
      )}
    </>
  );
};

export default Datefeed;
