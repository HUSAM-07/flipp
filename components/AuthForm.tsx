'use client';



import React, { useState } from 'react';

import { useAuth } from '../app/contexts/AuthContext';

import { auth } from '@/lib/firebase';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { useToast } from "@/hooks/use-toast"

import { useRouter } from 'next/navigation';



const AuthForm: React.FC = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const { user } = useAuth();

  const { toast } = useToast();

  const router = useRouter();



  const handleSignUp = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      await createUserWithEmailAndPassword(auth, email, password);

      toast({ title: "Success", description: "Account created successfully!" });

      router.push('/flashcards');

    } catch (error) {

      toast({ title: "Error", description: "Failed to create account.", variant: "destructive" });

    }

  };



  const handleSignIn = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(auth, email, password);

      toast({ title: "Success", description: "Signed in successfully!" });

      router.push('/flashcards');

    } catch (error) {

      toast({ title: "Error", description: "Failed to sign in.", variant: "destructive" });

    }

  };



  const handleSignOut = async () => {

    try {

      await signOut(auth);

      toast({ title: "Success", description: "Signed out successfully!" });

    } catch (error) {

      toast({ title: "Error", description: "Failed to sign out.", variant: "destructive" });

    }

  };



  if (user) {

    return (

      <div>

        <p>Signed in as {user.email}</p>

        <Button onClick={handleSignOut}>Sign Out</Button>

      </div>

    );

  }



  return (

    <form className="space-y-4">

      <Input

        type="email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

        placeholder="Email"

        required

      />

      <Input

        type="password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

        placeholder="Password"

        required

      />

      <Button onClick={handleSignUp}>Sign Up</Button>

      <Button onClick={handleSignIn}>Sign In</Button>

    </form>

  );

};



export default AuthForm;



