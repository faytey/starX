import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PageLayout = ({ children, url, text, src }) => {
  return (
    <div className="h-screen lg:w-[30rem] m-auto">
      <Link href={`/${url}`}>
        <div className="flex items-center mt-[2rem] px-2 mb-2">
          <span>
            <Image src="/Vector.svg" alt="back-arrow" width={24} height={24} />
          </span>
          <span>Back</span>
        </div>
      </Link>
      <h1 className="text-xl w-full text-left px-2 mb-2">{text}</h1>
      <main>{children}</main>
      <div className="flex flex-col items-center px-2">
        <Navbar />
      </div>
    </div>
  );
};
