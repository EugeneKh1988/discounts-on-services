import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Container from "../components/Container";
import Nav from "../components/Nav";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Nav />
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
