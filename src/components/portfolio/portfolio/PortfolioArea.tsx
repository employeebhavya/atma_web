"use client";
import portfolio_data from "@/data/portfolioData";
import Image from "next/image";
import { useState } from "react";

const tab_title: string[] = [
  "All",
  "Homeless",
  "Clean Water",
  "Education",
  "Food & Health",
];
const portfolioCounts: number[] = [portfolio_data.length, 2, 5, 3, 3];

const PortfolioArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const renderPortfolioItems = () => {
    const endIndex = portfolioCounts[activeTab];
    return portfolio_data.slice(0, endIndex).map((item) => (
      <div
        key={item.id}
        className="col-xl-4 col-md-6 item cleanWater foodHealth"
      >
        <div className="portfolio-item image">
          <Image src={item.thumb} alt="Portfolio" />
          <div className="portfolio-item__over">
            <span className="category">{item.category}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
      <div className="container">
        <div className="tab-content">
          {tab_title.map((_, index) => (
            <div
              key={index}
              className={`tab-pane fade ${
                activeTab === index ? "show active" : ""
              }`}
              id="description"
            >
              <div className="row portfolio-active justify-content-center">
                {renderPortfolioItems()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
