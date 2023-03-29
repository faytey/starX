import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const register = () => {
  return (
    <>
      <Head>
        <title>StarX | Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={`${styles.center} pt-[2rem]`}>
          <Image
            src="/StarXstarXlogo.svg"
            alt="StarX Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <input
          type="text"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Name"
        />

        <input
          type="number"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Employee Id Number"
        />

        <input
          type="password"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Password"
        />

        <input
          type="password"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Confirm Password"
        />
        <Link href="/userhome" className="w-full lg:w-[30rem]">
          <button className="bg-gray-300 border-2 border-gray-400 rounded-lg p-3 w-full lg:w-[30rem]">
            Register
          </button>
        </Link>
      </main>
    </>
  );
};

export default register;
