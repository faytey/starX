import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export const dataSet = [
  {
    id: 1,
    src: "Rectangle 22.png",
    text: "Jollof rice and coleslaw",
  },
  {
    id: 2,
    src: "Rectangle 24.png",
    text: "Pancakes, Omellete and Juice",
  },
];

export const FoodItem = () => {
  return (
    <div className="w-full">
      {dataSet.map((data) => {
        return (
          <Link
            href={`/${data["id"]}`}
            key={data["id"]}
            className={`${styles.card} mb-6 flex flex-col justify-between p-2`}
          >
            <div className="flex justify-between items-center">
              <div>
                <Image src={`/${data.src}`} alt="icon" width={50} height={50} />
              </div>
              <p>{data.text}</p>
              <div>
                <Image
                  src="/ri-more-2-fill.svg"
                  alt="icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Image src="/Vector.png" alt="icon" width={30} height={30} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
