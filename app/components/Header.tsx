import Image from "next/image";
import banner from "../../public/images/Weihnachten.png";

const Header = () => {
  return (
    <section className="relative flex w-full flex-col justify-center">
      <Image
        placeholder="blur"
        priority
        className="z-0 flex w-full object-cover object-right"
        src={banner}
        alt="Frohe Weihnachten!"
        width={1000}
        height={1000}
      />
    </section>
  );
};

export default Header;
