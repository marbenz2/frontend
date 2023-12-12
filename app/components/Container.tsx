type key = number;

const Container = ({ children }: { children: React.ReactNode }, key: key) => {
  return (
    <section className="relative flex w-full flex-col 2xl:flex-row-reverse 2xl:gap-8">
      {children}
    </section>
  );
};

export default Container;
