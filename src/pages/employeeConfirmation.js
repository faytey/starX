import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";

const employeeConfirmation = () => {
  return (
    <>
      <Head>
        <title>StarX | Confirm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input
          id="file"
          type="file"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
        />

        <input
          type="number"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Employee Id Number"
        />

        <input
          type="password"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Choose Password"
        />

        <input
          type="password"
          className="border-2 border-green-600 rounded-lg p-3 w-full lg:w-[30rem]"
          placeholder="Retype Password"
        />

        <button className="bg-gray-300 border-2 border-gray-400 rounded-lg p-3 w-full lg:w-[30rem]">
          <Link href="/kitchen">Register</Link>
        </button>
      </main>
    </>
  );
};

export default employeeConfirmation;
