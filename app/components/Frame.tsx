type FrameProps = {
  className: string;
};

const Frame = ({
  className,
  children,
}: React.PropsWithChildren<FrameProps>) => {
  return (
    <div
      className={`mt-12 flex w-full flex-col gap-8 px-2 xl:px-0 ${className}`}
    >
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
};

export default Frame;
