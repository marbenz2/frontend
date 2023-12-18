type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="relative flex w-full flex-col 2xl:flex-row-reverse 2xl:gap-8">
      {children}
    </div>
  );
};

export default Container;
