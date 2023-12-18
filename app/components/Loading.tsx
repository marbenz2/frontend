import { CardBody, CardContainer, CardHeader } from "./Card";

type LoadingProps = {
  double?: boolean;
};

const Loading = ({ double }: LoadingProps) => {
  const renderLoadingBar = (
    height: string,
    width: string,
    additionalClasses: string = "",
  ) => (
    <div
      className={`animate-pulse rounded-md ${additionalClasses}`}
      style={{ height, width }}
    />
  );

  return (
    <CardContainer>
      <CardHeader>
        {double ? (
          <>
            {renderLoadingBar("h-4", "w-24", "mb-2 bg-stone-400")}
            <div className="flex justify-between">
              {renderLoadingBar("h-2", "w-24", "bg-stone-300")}
              {renderLoadingBar("h-2", "w-24", "bg-stone-300")}
            </div>
          </>
        ) : (
          renderLoadingBar("h-8", "w-24", "bg-stone-400")
        )}
      </CardHeader>
      <CardBody>
        <div className="flex justify-center">
          {renderLoadingBar(
            "h-12",
            "w-12",
            "animate-spin rounded-full border-2 border-b-stone-400",
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Loading;
