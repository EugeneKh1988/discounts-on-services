import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { Button, Text } from "@mantine/core";
import { useState } from "react";
import SegmentedButtons from "./SegmentedButtons";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "gatsby";
import PurchaseBlock from "./PurchaseBlock";

interface PlanProps {
  type: "netflix" | "youtube" | "spotify";
  plan: IPlanOptions[];
  className?: string;
}


export interface IPlanOptions {
  id: number;
  name: string;
  options: string[];
  price: number;
}



const PlanBlock: React.FC<PlanProps> = ({
  className,
  type,
  plan,
}) => {
  const classNameValue = className ? `${className}` : "";
  const [month, setMonthPlan] = useState("6 months");
  const isMobile = useMediaQuery("(max-width: 42em)");
  const [opened, { open, close }] = useDisclosure(false);

  const countPrice = (price: number) => {
    if(month == "6 months") {
      return price;
    }
    else {
      return price * 2 - 5;
    }
  };

  const btnBackground = (index: number) => {
    if(isMobile) {
      return "bg-cobalt hover:bg-cobalt-900";
    }
    else {
      if(plan.length == 2) {
        if(index == 0) {
          return "bg-cobalt hover:bg-cobalt-900";
        }
        return "bg-mine-shaft hover:bg-mine-shaft-950";
      }
      else {
        if(index % 2 != 0) {
          return "bg-cobalt hover:bg-cobalt-900";
        }
        return "bg-mine-shaft hover:bg-mine-shaft-950";
      }
    }
  };

  const title = () => {
    if (type == "netflix") {
      return (
        <>
          <TextComponent type="h1" className="text-woodsmoke text-center mb-5">
            Choose a Netflix Plan
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft text-center mb-[52px]"
          >
            Listen without limits at a bargain price
          </TextComponent>
          <SegmentedButtons
            data={["6 months", "12 months"]}
            value={month}
            onChangeValue={setMonthPlan}
            className="mb-12"
          />
        </>
      );
    }
    if (type == "youtube") {
      return (
        <>
          <TextComponent type="h1" className="text-woodsmoke text-center mb-5">
            YouTube Premium- 1442
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft text-center mb-[52px]"
          >
            Select the subscription type for a period of <span className="text-cobalt">12 months:</span>
          </TextComponent>
        </>
      );
    }
    if (type == "spotify") {
      return (
        <>
          <TextComponent type="h1" className="text-woodsmoke text-center mb-5">
            Choose a Spotify Plan
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft text-center mb-[52px]"
          >
            Select the subscription type for a period of{" "}
            <span className="text-cobalt">12 months:</span>
          </TextComponent>
        </>
      );
    }
  };

  const justifyItems = () => {
    return plan.length < 3 ? "justify-center": "justify-start";
  };
  return (
    <Container className={`mt-[80px] ${classNameValue}`}>
      {title()}
      <div className={`flex gap-4 flex-wrap md:flex-nowrap ${justifyItems()}`}>
        {plan.map((item, index) => (
          <div
            key={item.id}
            className="basis-full md:basis-1/3 bg-white rounded-[32px]"
          >
            <TextComponent
              type="h2"
              className="text-center border-b border-b-[#DBDBDB] pt-8 pb-5 md:pt-[60px] md:pb-8"
            >
              {item.name}
            </TextComponent>
            <div className="px-4 py-5 2xl:px-10 2xl:py-8 flex flex-col justify-between">
              {item.options.map((option, index) => (
                <div
                  className="flex gap-2 text-[#5C5C5C] flex-nowrap items-center mt-4 first:mt-0"
                  key={index}
                >
                  <IconCircleCheckFilled size={32} className="shrink-0" />
                  <Text
                    component="p"
                    className="font-normal text-[15px] leading-[22.5px] 2xl:text-[16px] 2xl:leading-[24px]"
                  >
                    {option}
                  </Text>
                </div>
              ))}
              <div className="flex gap-0.5 justify-center mt-10 md:mt-8 2xl:mt-[60px]">
                <span className="font-bold text-[16px] leading-[20.8px] md:text-[26px] md:leading-[33.8px]">
                  &#36;
                </span>
                <Text
                  component="p"
                  className="font-bold text-[30px] leading-[39px] 2xl:text-[55px] 2xl:leading-[65px]"
                >
                  {countPrice(item.price)}
                </Text>
              </div>
              <Button
                onClick={open}
                className={`w-full min-h-[48px] 2xl:min-h-[54px] mt-3 2xl:mt-4 text-[15px] leading-[19px] font-medium 2xl:text-[18px] 2xl:leading-[23.4px] rounded-[12px] ${btnBackground(
                  index
                )}`}
              >
                Get started
              </Button>
            </div>
          </div>
        ))}
      </div>
      <PurchaseBlock opened={opened} onClose={close} isMobile={isMobile ? true: false} />
    </Container>
  );
};

export default PlanBlock;
