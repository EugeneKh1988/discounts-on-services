import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { Button, Text } from "@mantine/core";

interface RequestSubBlockProps {
  className?: string;
}

const RequestSubBlock: React.FC<RequestSubBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={`mt-[120px] ${classNameValue}`}>
      <div className="bg-cobalt rounded-[32px] p-5 md:p-8 2xl:px-[80px] 2xl:py-[44px] text-white block md:flex md:items-center md:justify-between md:gap-2">
        <div className="w-full md:max-w-[704px] ">
          <TextComponent type="h4">
            Request for an additional subscription that was not found here
          </TextComponent>
          <TextComponent type="blog" className="mt-4 2xl:mt-6">
            Disney, Amazon Prime, Microsoft Office, Microsoft Windows
          </TextComponent>
        </div>
        <div className="text-center rounded-[1rem] w-full md:max-w-[296px] mt-8 md:mt-0">
          <Button className="text-woodsmoke bg-white hover:bg-slate-200 hover:text-woodsmoke-950 font-bold text-[17px] leading-[22.1px] rounded-[16px] w-full md:min-w-[296px] min-h-[54px] ">
            Request
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RequestSubBlock;
