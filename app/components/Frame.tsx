type FrameProps = {
  type: string;
};

const Frame = ({ type, children }: React.PropsWithChildren<FrameProps>) => {
  return (
    <section
      className={`mt-12 flex w-full flex-col gap-8 px-2 xl:px-0 ${type}`}
    >
      <section className="flex flex-wrap gap-4">{children}</section>
    </section>
  );
};

export default Frame;
