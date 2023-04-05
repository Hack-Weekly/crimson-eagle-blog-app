import React, { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { Login } from "./Login"
import { Register } from "./Register"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crimson Blogs</title>
        <meta name="description" content="A blog Apllication where you can write blogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      </main>
    </>
  );
};

function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="text-center flex min-h-screen items-center justify-center bg-primary" >
      {
        currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  )
}

export default App;
