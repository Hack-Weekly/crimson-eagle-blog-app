import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crimson Blogs</title>
        <meta name="description" content="A blog Apllication where you can write blogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-white">Crimson Blogs</h1>
      </main>
    </>
  );
};

export default Home;
