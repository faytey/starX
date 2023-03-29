import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components/Navbar";
import { FoodItem } from "@/components/FoodItem";

const kitchen = () => {
  return (
    <>
      <Head>
        <title>StarX | Confirm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} mt-[5rem] px-2 max-h-screen`}>
        <h2 className="text-left w-full text-xl mb-4">Welcome, Sandra</h2>
        <input
          className={`ring-1 ring-black rounded-lg py-2 px-9 w-full lg:w-[30rem] mb-6 ${styles.search}`}
          type="search"
          placeholder="What would you like to eat today?"
        />
        <FoodItem src="Rectangle 22.png" text="Jollof rice and coleslaw" />
        <FoodItem src="Rectangle 24.png" text="Pancakes, Omellete and Juice" />

        <Navbar />
      </main>
    </>
  );
};

export default kitchen;
