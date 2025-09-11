'use client'

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home(){
  const { data: session} = authClient.useSession();


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    }, {
      onError: () =>{
        alert('Somethings went wrong');
      },
      onSuccess: () => {
        alert('Success')
      }
    });
  }
  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () =>{
        alert('Somethings went wrong');
      },
      onSuccess: () => {
        alert('Success')
      }
    });
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input 
          placeholder='Name' 
          value={name} 
          onChange={(e)=> setName(e.target.value)}
        />
        <Input 
          placeholder='Email' 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
        />
        <Input 
          placeholder='Password' 
          value={password} 
          type="password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>
          Create user
        </Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
        <Input 
          placeholder='Email' 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
        />
        <Input 
          placeholder='Password' 
          value={password} 
          type="password"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};
