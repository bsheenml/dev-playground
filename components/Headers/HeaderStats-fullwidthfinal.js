import React from "react";
import TestDrop from "components/Dropdowns/TestDrop";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="w-full">
              <div className="w-full lg:w-12/12 xl:w-12/12 px-4">
                <CardStats
                  statSubtitle="By Category"
                  statTitle="Learn Learn Learn - really just experimenting. I do have this crazy list of tutorials I've always saved but never done anything with -- I think a kind of curated source for quality tutorials would be a great way for someone to learn front end or even trying to get into tech at all -- work through a few tutorials, and you'll be pretty comfortable with the concept of front end, ya know?  Especially when the pool of tutorials comes from multiple quality sources and has filter/search capabilities. This could potentially allow someone to apply for tech jobs without spending stupid money on coding school. This is a passion of mine -- I never had a formal degree and worked in restaurants for most of my life. It wa"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
