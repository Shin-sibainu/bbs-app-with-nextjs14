import React from "react";
import BBSCard from "./BBSCard";

const BBSCardList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-4 md:py-6 lg:px-6">
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
};

export default BBSCardList;
