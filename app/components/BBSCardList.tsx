import React from "react";
import BBSCard from "./BBSCard";
import { BBSCardData } from "./types/types";

interface BBSCardListProps {
  bbsCardListData: BBSCardData[];
}

const BBSCardList = ({ bbsCardListData }: BBSCardListProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-4 md:py-6 lg:px-6">
      {bbsCardListData.map((bbsCard: BBSCardData) => (
        <BBSCard key={bbsCard.id} bbsCard={bbsCard} />
      ))}
    </div>
  );
};

export default BBSCardList;
