import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const login = () => {
  return (
    <>
      <Head>
        <title>StarX | Login</title>
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

        <div className={`${styles.center} px-0`}>
          <Image
            src="/undraw_eating_together_re_ux62 (1).png"
            alt="StarX Hero Image"
            width={400}
            height={300}
            priority
          />
        </div>

        <input
          type="text"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Id Number"
        />
        <input
          type="password"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Password"
        />
        <button className="bg-gray-300 border-2 border-gray-400 rounded-lg p-3 w-full lg:w-[30rem]">
          <Link href="/kitchen">Login</Link>
        </button>
      </main>
    </>
  );
};

export default login;
