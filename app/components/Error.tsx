import { ErrorType } from "@/types/types";
import Link from "next/link";

const Error = ({ error }: { error: ErrorType }) => {
  return (
    <div className="flex w-full flex-col gap-2" role="alert">
      <p className="px-2 py-1 text-center text-red-400">
        {error.message}: {error.code}
      </p>
      <p className="px-2 py-1 text-center">
        <Link href="/">
          <a>Click here to reload the page.</a>
        </Link>
      </p>
    </div>
  );
};

export default Error;
