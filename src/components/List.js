import Image from "next/image";
import React from "react";

export const List = () => {
  const dataSet = [
    {
      src: "Rectangle 22.png",
      text: "French Toast & Fruits",
      date: "23rd March, 2023",
    },
    {
      src: "Rectangle 24.png",
      text: "MeatBalls & Veggies",
      date: "24th March, 2023",
    },
    {
      src: "Rectangle 22.png",
      text: "French Toast & Fruits",
      date: "27th March, 2023",
    },
    {
      src: "Rectangle 24.png",
      text: "MeatBalls & Veggies",
      date: "28th March, 2023",
    },
  ];
  return (
    <div className="mt-[3rem]">
      {dataSet.map((data) => {
        return (
          <div
            key={data}
            className="flex justify-between p-3 items-start border-2 border-grey rounded-sm"
          >
            <div className="flex gap-4">
              <Image
                src={`/${data.src}`}
                alt="meal-image"
                width={50}
                height={50}
              />
              <span className="flex flex-col">
                <span>{data.text}</span>
                <span>{data.date}</span>
              </span>
            </div>
            <Image
              src="/ri-more-2-fill.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
        );
      })}
    </div>
  );
};
