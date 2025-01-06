import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { StaticImage } from "gatsby-plugin-image";

interface HowWorksBlockProps {
  className?: string;
}

const HowWorksBlock: React.FC<HowWorksBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={`mt-[128px] ${classNameValue}`}>
      <TextComponent type="h2" className="text-woodsmoke text-center mb-8">
        How it works?
      </TextComponent>
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-start">
        <div className="max-w-[388px] bg-white rounded-[32px] flex-auto p-5 2xl:p-10">
          <div className="flex justify-between lg:justify-end items-center h-auto md:h-[9.4rem]">
            <TextComponent type="h4" className="text-woodsmoke lg:hidden">
              Step 1
            </TextComponent>
            <StaticImage
              src="../images/bell.svg"
              alt="Bell image"
              className="max-w-[91px] md:max-w-[81px] 2xl:max-w-[159px]"
            />
          </div>
          <TextComponent type="h4" className="text-woodsmoke hidden lg:block">
            Step 1
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft mt-[26px] w-full 2xl:max-w-[227px]"
          >
            Enter your account information
          </TextComponent>
        </div>
        <div className="max-w-[388px] bg-white rounded-[32px] flex-auto p-5 2xl:p-10">
          <div className="flex justify-between lg:justify-end items-center h-auto md:h-[9.4rem]">
            <TextComponent type="h4" className="text-woodsmoke lg:hidden">
              Step 2
            </TextComponent>
            <StaticImage
              src="../images/chats.svg"
              alt="Chat image"
              className="max-w-[91px] md:max-w-[81px] 2xl:max-w-[159px]"
            />
          </div>
          <TextComponent type="h4" className="text-woodsmoke hidden lg:block">
            Step 2
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft mt-[26px] w-full 2xl:max-w-[227px]"
          >
            Select the desired subscription and plan
          </TextComponent>
        </div>
        <div className="max-w-[388px] bg-white rounded-[32px] flex-auto p-5 2xl:p-10">
          <div className="flex justify-between lg:justify-end items-center h-auto md:h-[9.4rem]">
            <TextComponent type="h4" className="text-woodsmoke lg:hidden">
              Step 3
            </TextComponent>
            <StaticImage
              src="../images/successfull.svg"
              alt="Succesfull image"
              className="max-w-[91px] md:max-w-[81px] 2xl:max-w-[159px]"
            />
          </div>
          <TextComponent type="h4" className="text-woodsmoke hidden lg:block">
            Step 3
          </TextComponent>
          <TextComponent
            type="blog"
            className="text-mine-shaft mt-[26px] w-full 2xl:max-w-[227px]"
          >
            Pay your bill with PayPal
          </TextComponent>
        </div>
      </div>
    </Container>
  );
};

export default HowWorksBlock;
