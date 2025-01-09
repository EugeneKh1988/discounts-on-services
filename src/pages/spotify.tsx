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
    name: "Individual",
    options: [
      "Ad-free music listening",
      "Play anywhere - even offline",
      "On-demand playback",
    ],
    price: 47,
  },
  {
    id: 2,
    name: "Duo",
    options: [
      "2 Premium accounts for a couple under one roof",
      "Ad-free music listening, play offline, on-demand playback",
    ],
    price: 57,
  },
  {
    id: 3,
    name: "Family",
    options: [
      "6 Premium accounts for family members living under one roof",
      "Block explicit music",
      "Ad-free music listening, play offline, on-demand playback",
    ],
    price: 77,
  },
];

const SpotifyPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <PlanBlock type="spotify" plan={plan} />
      <InviteBlock />
      <FaqBlock />
      <FooterBlock />
    </>
  );
};

export default SpotifyPage;

export const Head: HeadFC = () => <title>Spotify subscription Page</title>;
