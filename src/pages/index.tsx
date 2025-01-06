import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav";
import StartBlock from "../components/StartBlock";
import SubscriptionBlock from "../components/SubscriptionBlock";
import HowWorksBlock from "../components/HowWorksBlock";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <StartBlock />
      <SubscriptionBlock />
      <HowWorksBlock />
    </>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
