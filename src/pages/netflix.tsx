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
    name: "Basic",
    options: [
      "Ad-free music listening",
      "Play anywhere - even offline",
      "On-demand playback",
    ],
    price: 45,
  },
  {
    id: 2,
    name: "Standart",
    options: [
      "Ad-free music listening",
      "Play anywhere - even offline",
      "On-demand playback",
    ],
    price: 60,
  },
  {
    id: 3,
    name: "Premium",
    options: [
      "Ad-free music listening",
      "Play anywhere - even offline",
      "On-demand playback",
    ],
    price: 80,
  },
];

const NetflixPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <PlanBlock type="netflix" plan={plan} />
      <InviteBlock />
      <FaqBlock />
      <FooterBlock />
    </>
  );
};

export default NetflixPage;

export const Head: HeadFC = () => <title>Netflix subscription Page</title>;
