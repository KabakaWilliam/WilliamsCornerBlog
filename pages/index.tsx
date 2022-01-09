import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex items-center h-screen w-screen justify-center">
      <Head>
        <title>William's Corner Blog</title>
        <meta name="description" content="Welcome to William's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl">Welcome to my Blog</h1>
    </div>
  );
};

export default Home;
