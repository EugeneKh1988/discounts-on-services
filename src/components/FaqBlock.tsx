import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { Accordion, Button, Text } from "@mantine/core";

interface FaqBlockProps {
  title: string;
  className?: string;
}

interface IQuestion {
    id: number,
    question: string,
    answer: string,
}

const questions: IQuestion[] = [
  {
    id: 1,
    question:
      "The set time has passed, but the invoice has not yet arrived, what should I do?",
    answer: "Answer",
  },
  {
    id: 2,
    question:
      "Can I change my Netflix account email and password after purchase?",
    answer: "Answer",
  },
  {
    id: 3,
    question: "Can I add a phone number for password recovery?",
    answer: "Answer",
  },
  {
    id: 4,
    question: "How soon will I receive the account information I ordered?",
    answer: "Answer",
  },
  {
    id: 5,
    question: "How to pay?",
    answer: "Payment options we currently have: PayPal, Bitcoin.",
  },
];

const FaqBlock: React.FC<FaqBlockProps> = ({ className, title }) => {
  const classNameValue = className ? `${className}` : "";

  const items = questions.map((item) => (
    <Accordion.Item key={item.id} value={item.question}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container className={`mt-[120px] ${classNameValue}`}>
      <TextComponent type="h2" className="text-woodsmoke text-center mb-9">
        {title}
      </TextComponent>
      <Accordion
        variant="separated"
        classNames={{
          item: "bg-white rounded-[32px] px-5 2xl:px-10",
          control: "min-h-[104px]",
          chevron: "w-10 h-10 bg-woodsmoke/5 rounded-[12px] justify-center",
          label:
            "font-normal text-[17px] leading-[25.5px] 2xl:text-[18px] 2xl:leading-[27px] text-woodsmoke",
          content:
            "font-normal text-[17px] leading-[25.5px] 2xl:text-[18px] 2xl:leading-[27px] mine-shaft",
        }}
      >
        {items}
      </Accordion>
      <div className="text-center mt-10">
        <Button className="text-white bg-mine-shaft hover:bg-mine-shaft-950 font-bold text-[17px] leading-[22.1px] rounded-[16px] min-w-[243px] min-h-[54px] ">
          Support
        </Button>
      </div>
    </Container>
  );
};

export default FaqBlock;
