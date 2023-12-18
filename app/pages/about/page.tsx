import { CardBody, CardContainer, CardHeader } from "../../components/Card";
import Container from "../../components/Container";
import Frame from "../../components/Frame";

export default function Home() {
  return (
    <Container>
      <Frame className="2xl:w-1/3">
        <CardContainer>
          <CardHeader titel="Presse" />
          <CardBody>TEST</CardBody>
        </CardContainer>
      </Frame>
      <Frame className="2xl:w-2/3">
        <CardContainer>
          <CardHeader titel="Über uns" />
          <CardBody>TEST</CardBody>
        </CardContainer>
      </Frame>
    </Container>
  );
}
