import * as React from "react";
import Container from "./Container";
import { Button } from "@mantine/core";
import TextComponent from "./TextComponent";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface SubscriptionBlockProps {
  className?: string;
}

const SubscriptionBlock: React.FC<SubscriptionBlockProps> = ({
  className,
}) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={`mt-[120px] ${classNameValue}`}>
      <TextComponent type="h2" className="text-woodsmoke text-center mb-8">
        Choose a subscription
      </TextComponent>
      <div className="flex bg-white rounded-[32px] justify-between flex-col md:flex-row">
        <div className="p-5 md:p-[32px] 2xl:p-[60px] w-full md:max-w-[350px] 2xl:max-w-[500px]">
          <TextComponent type="h3" className="text-woodsmoke">
            Netflix subscription rates
          </TextComponent>
          <TextComponent type="p" className="text-mine-shaft mt-[22px]">
            The constant contributes to the task of the same and thus the
            intended features and the set relation to the check and set also.
          </TextComponent>
          <Button
            color="cobalt.8"
            c="white"
            radius={12}
            px={24}
            mt={54}
            mih={48}
            className="w-full md:w-[135px]"
          >
            Learn more
          </Button>
        </div>
        <div className="bg-black max-w-[588px] flex justify-center items-center grow rounded-[32px] order-first md:order-last">
          <StaticImage src="../images/netflix.png" alt="Netflix" />
        </div>
      </div>
      <div className="flex bg-white rounded-[32px] justify-between flex-col md:flex-row mt-4">
        <div className="p-5 md:p-[32px] 2xl:p-[60px] w-full md:max-w-[350px] 2xl:max-w-[500px]">
          <TextComponent type="h3" className="text-woodsmoke">
            Spotify Premium
          </TextComponent>
          <TextComponent type="p" className="text-mine-shaft mt-[22px]">
            The constant contributes to the task of the same and thus the
            intended features and the set relation to the check and set also.
          </TextComponent>
          <Button
            color="cobalt.8"
            c="white"
            radius={12}
            px={24}
            mt={54}
            mih={48}
            className="w-full md:w-[135px]"
          >
            Learn more
          </Button>
        </div>
        <div className="bg-[#1ed760] max-w-[588px] flex justify-center items-center grow rounded-[32px] order-first md:order-last">
          <StaticImage src="../images/spotify.png" alt="Netflix" />
        </div>
      </div>
      <div className="flex bg-white rounded-[32px] justify-between flex-col md:flex-row mt-4">
        <div className="p-5 md:p-[32px] 2xl:p-[60px] w-full md:max-w-[350px] 2xl:max-w-[500px]">
          <TextComponent type="h3" className="text-woodsmoke">
            YouTube Premium
          </TextComponent>
          <TextComponent type="p" className="text-mine-shaft mt-[22px]">
            The constant contributes to the task of the same and thus the
            intended features and the set relation to the check and set also.
          </TextComponent>
          <Button
            color="cobalt.8"
            c="white"
            radius={12}
            px={24}
            mt={54}
            mih={48}
            className="w-full md:w-[135px]"
          >
            Learn more
          </Button>
        </div>
        <div className="bg-[#E1DCEB] max-w-[588px] flex justify-center items-center grow rounded-[32px] order-first md:order-last min-h-[213px]">
          <StaticImage src="../images/youtube.png" alt="Netflix" />
        </div>
      </div>
    </Container>
  );
};

export default SubscriptionBlock;
