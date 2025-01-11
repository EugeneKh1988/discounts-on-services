import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "../components/Nav";
import InviteBlock from "../components/InviteBlock";
import FaqBlock from "../components/FaqBlock";
import FooterBlock from "../components/FooterBlock";
import PlanBlock, { IPlanOptions } from "../components/PlanBlock";

const plan: IPlanOptions[] = [
  {
    id: 1,
    name: "Music",
    options: ["Listen to music without ads, in the background and offline"],
    price: 60,
  },
  {
    id: 2,
    name: "Premium",
    options: [
      "YouTube and YouTube Music without ads, in the background and offline",
    ],
    price: 80,
  },
];

const YoutubePage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <PlanBlock type="youtube" plan={plan} />
      <InviteBlock />
      <FaqBlock title="FAQ" />
      <FooterBlock />
    </>
  );
};

export default YoutubePage;

export const Head: HeadFC = () => <title>Youtube subscription Page</title>;
