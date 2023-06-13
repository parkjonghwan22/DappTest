import type { NextPage } from "next";
import Image from "next/image";
import { RootLayout } from "@components/layout/layout";

const Home: NextPage = () => {
  console.log("Hello2");
  return <RootLayout>{/* <Listing /> */}</RootLayout>;
};

export default Home;
