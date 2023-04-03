import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail ] = useState('');
    const [pass, setPass ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
         <div className="flex flex-col justify-center items-center font-publicsans p-20 border-2 border-primary">   
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <label className="text-left py-1 px-0 text-primary" htmlFor="email">Email</label>
                <input className="my-2 mx-0 p-4 rounded border-primary border-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"/>
                <label className="text-left py-1 px-0 text-primary" htmlFor="password">Password</label>
                <input className="my-2 mx-0 p-4 rounded border-primary border-2"  value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name= "password"/>
                <button className="border-none bg-secondary px-20 py-1 border-primary bg-none p-1.25 rounded-sm cursor-pointer">Log In</button>
        </form>
        <button className="bg-none py-2 text-primary underline cursor-pointer" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}