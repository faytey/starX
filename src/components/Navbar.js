import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between mt-[100%] items-center lg:w-[30rem] fixed bottom-0 pr-4 pl-2">
      <Link href="/userhome">
        <Image
          className="mr-4 focus:bg-grey-400"
          src="/Frame 13.svg"
          alt="home button"
          width={50}
          height={50}
        />
      </Link>
      <Link href="/history">
        <Image
          className="mx-4 px-4 focus:bg-grey-400"
          src="/Frame 16 (1).svg"
          alt="history button"
          width={80}
          height={50}
        />
      </Link>
      <Link href="/profile">
        <Image
          className="mx-4 px-4 focus:bg-grey-400"
          src="/Frame 14 (1).svg"
          alt="profile button"
          width={80}
          height={50}
        />
      </Link>
      <Link href="/more">
        <Image
          className="ml-4 focus:bg-grey-400"
          src="/Frame 17 (1).svg"
          alt="more button"
          width={30}
          height={50}
        />
      </Link>
    </div>
  );
};
