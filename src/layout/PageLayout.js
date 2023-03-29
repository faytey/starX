import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export const PageLayout = (props) => {
  return (
    <div>
      <div>
        <span>
          <Image src="/Vector.svg" alt="back-arrow" width={50} height={50} />
        </span>
        <span>Back</span>
      </div>
      <main>{props.children}</main>
      <Navbar />
    </div>
  );
};
