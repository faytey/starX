import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export const dataSet = [
  {
    id: 1,
    src: "Rectangle 22.png",
    text: "Jollof rice and coleslaw",
    date: "28th March, 2023",
  },
  {
    id: 2,
    src: "Rectangle 24.png",
    text: "Pancakes, Omellete and Juice",
    date: "28th March, 2023",
  },
];

export const FoodItem = () => {
  return (
    <div className="w-full mt-[2rem]">
      {dataSet.map((data) => {
        return (
          <Link
            href={`/${data["id"]}`}
            key={data["id"]}
            className={`${styles.card} mb-10 flex flex-col justify-between p-2`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div>
                  <Image
                    src={`/${data.src}`}
                    alt="icon"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-lg">{data.text}</p>
              </div>
              <div>
                <Image
                  src="/ri-more-2-fill.svg"
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="flex mt-2">
              <div className="flex-1 text-center">{data.date}</div>
              <div className="flex-2 justify-end">
                <Image src="/Vector.png" alt="icon" width={30} height={30} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
