import * as React from "react";
import Container from "./Container";
import TextComponent from "./TextComponent";
import { Text } from "@mantine/core";
import { Link } from "gatsby";
import SvgIcon from "./SvgIcon";

interface InviteBlockProps {
  className?: string;
}

const InviteBlock: React.FC<InviteBlockProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={`mt-5 ${classNameValue}`}>
      <div className="bg-cobalt rounded-[32px] p-5 md:p-8 2xl:px-[80px] 2xl:py-[44px] text-white block md:flex md:items-center md:justify-between md:gap-2">
        <div>
          <TextComponent type="h3">Invite friends</TextComponent>
          <TextComponent
            type="p"
            className="w-full md:max-w-[508px] mt-4 2xl:mt-6"
          >
            Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
            with a secure payment from PAYPAL
          </TextComponent>
        </div>
        <div className="bg-[#F1F4F8] py-6 text-center rounded-[1rem] w-full md:max-w-[445px] mt-8 md:mt-0">
          <TextComponent type="h5" className="text-woodsmoke">
            Click on the link
          </TextComponent>
          <div className="flex w-full gap-1 justify-center">
            <Link to="/">
              <Text
                fz={20}
                lh="30px"
                className="text-cobalt uppercase underline underline-offset-2"
              >
                Discounts On Services
              </Text>
            </Link>
            <SvgIcon iconName="copy" className="text-woodsmoke" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InviteBlock;
