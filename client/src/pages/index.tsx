import React, { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { Login } from "./Login";
import { Register } from "./Register";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crimson Blogs</title>
        <meta
          name="description"
          content="A blog Apllication where you can write blogs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-primary">
        <App />
      </main>
    </>
  );
};

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (type: "login" | "register") => {
    setCurrentForm(type);
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      {currentForm == "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default Home;
