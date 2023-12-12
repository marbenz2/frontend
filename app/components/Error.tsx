import { ErrorType } from "@/types/types";

const Error = ({ error }: { error: ErrorType }) => {
  return (
    <div className="flex w-full flex-col gap-2" role="alert">
      <p className="px-2 py-1 text-center text-red-400">
        {error.message}: {error.code}
      </p>
      <p className="px-2 py-1 text-center">
        <a href="/">Click here to reload the page.</a>
      </p>
    </div>
  );
};

export default Error;
