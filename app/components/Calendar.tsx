import { CardBody, CardContainer, CardHeader } from "./Card";

const Calendar = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardContainer>
      <CardHeader title="Calendar" />
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

export default Calendar;
