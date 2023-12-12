import { CardBody, CardContainer, CardHeader } from "../components/Card";
import Container from "../components/Container";
import Datefeed from "../components/Datefeed";
import Frame from "../components/Frame";

export default function Home() {
  return (
    <Container>
      <Frame type="2xl:w-1/5">
        <Datefeed />
      </Frame>
      <Frame type="2xl:w-2/5">
        <CardContainer>
          <CardHeader title="Presse" />
          <CardBody>TEST</CardBody>
        </CardContainer>
      </Frame>
      <Frame type="2xl:w-2/5">
        <CardContainer>
          <CardHeader
            title="Herzlich willkommen bei der Jugendkapelle der Musikvereine
              Grafenberg und Riederich"
          />
          <CardBody>TEST</CardBody>
        </CardContainer>
      </Frame>
    </Container>
  );
}
