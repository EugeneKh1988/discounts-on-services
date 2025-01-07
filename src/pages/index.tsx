import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav";
import StartBlock from "../components/StartBlock";
import SubscriptionBlock from "../components/SubscriptionBlock";
import HowWorksBlock from "../components/HowWorksBlock";
import InviteBlock from "../components/InviteBlock";
import AboutBlock from "../components/AboutBlock";
import FaqBlock from "../components/FaqBlock";
import RequestSubBlock from "../components/RequestSubBlock";
import FooterBlock from "../components/FooterBlock";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <StartBlock />
      <SubscriptionBlock />
      <HowWorksBlock />
      <InviteBlock />
      <AboutBlock />
      <FaqBlock />
      <RequestSubBlock />
      <FooterBlock />
    </>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
