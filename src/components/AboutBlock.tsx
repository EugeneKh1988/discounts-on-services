import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { Text } from "@mantine/core";
import { Link } from "gatsby";
import SvgIcon from "./SvgIcon";
import { StaticImage } from "gatsby-plugin-image";

interface AboutBlockProps {
  className?: string;
}

const AboutBlock: React.FC<AboutBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={`mt-[120px] ${classNameValue}`}>
      <TextComponent type="h2" className="text-woodsmoke text-center mb-9">
        About us
      </TextComponent>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white rounded-[32px] p-5 2xl:p-[60px] w-full md:max-w-[592px] md:basis-1/2">
          <StaticImage
            src="../images/big_logo.png"
            alt="Logo"
            className="w-[130px] h-auto"
          />
          <TextComponent type="blog" className="text-mine-shaft mt-5 2xl:mt-8">
            We offer you a subscription to various media services at the best
            price.
          </TextComponent>
          <TextComponent type="blog" className="text-mine-shaft mt-5 2xl:mt-8">
            We have partnered with several companies to help you find the best
            prices for your media subscriptions and provide you with the best
            prices for the Premium subscriptions you want.
          </TextComponent>
          <Text
            fz={18}
            lh="27px"
            fw={700}
            className="text-woodsmoke mt-5 2xl:mt-8"
          >
            It's simple, fast and economical.
          </Text>
        </div>
        <div className="bg-white rounded-[32px] w-full md:max-w-[592px] flex justify-center items-center order-first md:order-last md:basis-1/2">
          <StaticImage
            src="../images/about.png"
            alt="About image"
            className="rounded-[32px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutBlock;
