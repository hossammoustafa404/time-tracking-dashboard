import React, { useState } from "react";
import { data } from "./data";
import ActivityCard from "./components/ActivityCard";
import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";

const App = () => {
  const [category, setCategory] = useState("daily");

  return (
    <>
      <div className="min-h-[100vh] bg-[#0f1424] flex-center text-white px-[15px] py-[50px]">
        <main className="flex flex-col gap-[1rem] xl:flex-row xl:w-[70%]">
          <article className="bg-[#1d204b] rounded-[0.8rem] overflow-hidden flex-shrink-0">
            <div className="p-[1.2rem] pb-[2.5rem] rounded-b-[0.8rem] bg-[#5746ea] flex flex-center-y gap-[1rem] xl:flex-col xl:items-start">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] border-[2px] border-white">
                <img src="./imgs/image-jeremy.png" alt="Avatar" />
              </div>
              <div className="">
                <p className="text-h3 text-secondaryText">Reported for</p>
                <h2 className="text-h1 w-fit capitalize text-white font-light xl:max-w-[10rem]">
                  jeremy robson
                </h2>
              </div>
            </div>
            <div className="p-[1.2rem] flex justify-between xl:flex-col xl:items-start xl:gap-[1rem]">
              <CustomButton
                title="daily"
                setCategory={setCategory}
                category={category}
              />
              <CustomButton
                title="weekly"
                setCategory={setCategory}
                category={category}
              />
              <CustomButton
                title="monthly"
                setCategory={setCategory}
                category={category}
              />
            </div>
          </article>
          <section className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-[1rem]">
            {data.map((item, index) => {
              let bgColor;
              let bgImg;
              switch (index) {
                case 0:
                  bgColor = "bg-[#ff8b64]";
                  bgImg = "bg-work";
                  break;
                case 1:
                  bgColor = "bg-[#56c2e6]";
                  bgImg = "bg-play";
                  break;
                case 2:
                  bgColor = "bg-[#ff5e7d]";
                  bgImg = "bg-study";
                  break;
                case 3:
                  bgColor = "bg-[#4bcf82]";
                  bgImg = "bg-exercise";
                  break;
                case 4:
                  bgColor = "bg-[#4bcf82]";
                  bgImg = "bg-social";
                  break;
                case 5:
                  bgColor = "bg-[#f1c75b]";
                  bgImg = "bg-selfCare";
                  break;

                default:
                  break;
              }
              return (
                <ActivityCard
                  key={index}
                  category={category}
                  {...item}
                  bgColor={bgColor}
                  bgImg={bgImg}
                />
              );
            })}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
