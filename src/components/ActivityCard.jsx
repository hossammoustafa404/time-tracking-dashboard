import React from "react";

const ActivityCard = ({ category, bgColor, bgImg, title, timeframes }) => {
  const currentHrs = timeframes[category].current;
  const prevHrs = timeframes[category].previous;

  let cat = "day";
  switch (category) {
    case "daily":
      cat = "day";
      break;
    case "weekly":
      cat = "week";
      break;
    case "monthly":
      cat = "month";
      break;

    default:
      break;
  }

  return (
    <article
      className={`${bgColor} ${bgImg} bg-no-repeat bg-[length:3.5rem] bg-[right_1rem_top_-0.5rem] rounded-[0.8rem] overflow-hidden`}
    >
      <div className="p-[1.2rem] mt-[2rem] rounded-[0.8rem] bg-[#1d204b] hover:bg-[#34397b] transition-[0.2s] h-[100%] ">
        <header className="flex justify-between">
          <h3 className="text-h2 text-white capitalize">{title}</h3>
          <button type="button">
            <img src="./imgs/icon-ellipsis.svg" alt="Menu" />
          </button>
        </header>
        <div className="mt-[0.7rem] flex justify-between items-center xl:block">
          <p className="text-h1 text-white">{currentHrs}hrs</p>
          <p className="text-secondaryText text-h3">
            Last {cat} - {prevHrs}hrs
          </p>
        </div>
      </div>
    </article>
  );
};

export default ActivityCard;
