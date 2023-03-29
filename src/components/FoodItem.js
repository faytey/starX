import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export const FoodItem = ({ src, text }) => {
  return (
    <div className={`${styles.card} w-full mb-1 flex flex-col justify-between`}>
      <div className="flex justify-between items-center py-2">
        <div>
          <Image src={`/${src}`} alt="icon" width={50} height={50} />
        </div>
        <p>{text}</p>
        <div>
          <Image src="/ri-more-2-fill.svg" alt="icon" width={30} height={30} />
        </div>
      </div>
      <div className="flex justify-end">
        <Image src="/Vector.png" alt="icon" width={30} height={30} />
      </div>
    </div>
  );
};
