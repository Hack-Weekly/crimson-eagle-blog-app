import React, { useState } from "react";

export const Register = ({
  onFormSwitch,
}: {
  onFormSwitch: (type: "login" | "register") => void;
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex flex-col items-center justify-center border-2 border-primary p-20 font-publicsans">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="px-0 py-1 text-left text-primary" htmlFor="full name">
          Full name
        </label>
        <input
          className="mx-0 my-2 rounded border-2 border-primary p-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Full Name"
        />
        <label className="px-0 py-1 text-left text-primary" htmlFor="email">
          Email
        </label>
        <input
          className="mx-0 my-2 rounded border-2 border-primary p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@email.com"
          id="email"
          name="email"
        />
        <label className="px-0 py-1 text-left text-primary" htmlFor="password">
          Password
        </label>
        <input
          className="mx-0 my-2 rounded border-2 border-primary p-4"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="p-1.25 cursor-pointer rounded-sm border-none border-primary bg-secondary bg-none px-20 py-1">
          Log In
        </button>
      </form>
      <button
        className="cursor-pointer bg-none py-2 text-primary underline"
        onClick={() => onFormSwitch("login")}
      >
        Already have an account? Log in here.
      </button>
    </div>
  );
};
