import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Container from "../components/Container";
import Nav from "../components/Nav";
import StartBlock from "../components/StartBlock";
import SubscriptionBlock from "../components/SubscriptionBlock";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <StartBlock />
      <SubscriptionBlock />
    </>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
