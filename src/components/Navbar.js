import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  //   const active = () => {
  //     return { cla };
  //   };
  return (
    <div className="flex justify-between mb-0 mt-[100%] items-center lg:w-[30rem] fixed">
      <Link href="/kitchen">
        <Image
          className="mr-4"
          src="./Frame 13.svg"
          alt="home button"
          width={65}
          height={50}
        />
      </Link>
      <Link href="/history">
        <Image
          className="mx-4 px-4"
          src="./Frame 16 (1).svg"
          alt="history button"
          width={100}
          height={50}
        />
      </Link>
      <Link href="/profile">
        <Image
          className="mx-4 px-4"
          src="./Frame 14 (1).svg"
          alt="profile button"
          width={100}
          height={50}
        />
      </Link>
      <Link href="/more">
        <Image
          className="ml-4"
          src="./Frame 17 (1).svg"
          alt="more button"
          width={48}
          height={50}
        />
      </Link>
    </div>
  );
};
