import * as React from "react";
import Container from "./Container";
import { Button } from "@mantine/core";
import TextComponent from "./TextComponent";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface StartBlockProps {
  className?: string;
}

const StartBlock: React.FC<StartBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container
      className={`flex gap-4 mt-[60px] flex-wrap md:flex-nowrap ${classNameValue}`}
    >
      <div className="p-5 lg:px-[60px] lg:py-[114px] w-full md:max-w-[592px] bg-cobalt text-white rounded-[32px]">
        <TextComponent type="h1">
          Start enjoying a benefit of up to 50%
        </TextComponent>
        <TextComponent type="p" className="mt-6">
          You have always wanted to get the same product at a special price for
          you, without haggling - and it is yours.
        </TextComponent>
        <Button
          c="woodsmoke.10"
          color="white"
          radius={16}
          mt={40}
          px={40}
          className="hover:bg-slate-100 w-full md:w-[207px]"
          h={54}
        >
          <TextComponent type="button">Start using</TextComponent>
        </Button>
      </div>
      <div className="w-full md:max-w-[592px] order-first md:order-last">
        <StaticImage
          src="../images/services.png"
          alt="Services"
          className="w-full h-auto rounded-[32px] max-h-[500px]"
        />
      </div>
    </Container>
  );
};

export default StartBlock;
