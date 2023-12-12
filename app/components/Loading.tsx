import { CardBody, CardContainer, CardHeader } from "./Card";

type LoadingProps = {
  double?: boolean;
};

const Loading = ({ double }: LoadingProps) => {
  return (
    <CardContainer>
      <CardHeader>
        {double ? (
          <>
            <div className="mb-2 h-4 w-24 animate-pulse rounded-md bg-stone-400" />
            <div className="flex justify-between">
              <div className="h-2 w-24 animate-pulse rounded-md bg-stone-300" />
              <div className="h-2 w-24 animate-pulse rounded-md bg-stone-300" />
            </div>
          </>
        ) : (
          <div className="h-8 w-24 animate-pulse rounded-md bg-stone-400" />
        )}
      </CardHeader>
      <CardBody>
        {
          <div className="flex justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-b-stone-400" />
          </div>
        }
      </CardBody>
    </CardContainer>
  );
};

export default Loading;
