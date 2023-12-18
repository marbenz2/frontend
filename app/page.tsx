import Frame from "./components/Frame";
import Datefeed from "./components/Datefeed";
import Newsfeed from "./components/Newsfeed";
import Container from "./components/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Frame className={"2xl:w-1/4"}>
          <Datefeed />
        </Frame>
        <Frame className={"2xl:w-3/4"}>
          <Newsfeed />
        </Frame>
      </Container>
    </>
  );
}
