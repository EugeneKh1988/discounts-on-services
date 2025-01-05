import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Container from "../components/Container";
import Nav from "../components/Nav";
import StartBlock from "../components/StartBlock";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <StartBlock />
    </>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
