import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "../components/Nav";
import FaqBlock from "../components/FaqBlock";
import FooterBlock from "../components/FooterBlock";


const FaqPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <FaqBlock title="How can we help you?" />
      <FooterBlock />
    </>
  );
};

export default FaqPage;

export const Head: HeadFC = () => <title>FAQ Page</title>;
